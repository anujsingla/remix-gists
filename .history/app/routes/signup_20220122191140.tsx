import {
  ActionFunction,
  Form,
  json,
  LinksFunction,
  useActionData,
  useTransition,
} from "remix";
import { IActionData } from "~/models/signupModel";
import signupStyle from "~/styles/signup.css";
import {
  badRequest,
  createUserAccount,
  matchPassword,
  validateEmail,
  validateName,
  validatePassword,
} from "~/utils.ts/signupUtils";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: signupStyle,
    },
  ];
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const firstName = formData.get("firstName");
  const lastName = formData.get("lastName");
  const email = formData.get("email");
  const password = formData.get("password");
  const confirmPassword = formData.get("confirmPassword");
  console.log("form data", firstName);
  if (
    typeof firstName !== "string" ||
    typeof email !== "string" ||
    typeof lastName !== "string" ||
    typeof password !== "string" ||
    typeof confirmPassword !== "string"
  ) {
    return badRequest({ formError: "Form field is not correct" });
  }
  const payload = {
    firstName,
    email,
    lastName,
    password,
    confirmPassword,
  };

  const fieldError = {
    firstName: validateName(firstName, "First Name"),
    email: validateEmail(email),
    lastName: validateName(lastName, "Last Name"),
    password: validatePassword(password),
    confirmPassword: validatePassword(password),
    matchPassword: matchPassword(password, confirmPassword),
  };

  if (Object.values(fieldError).some(Boolean)) {
    return badRequest({ fieldError, fields: payload });
  }

  await createUserAccount(payload);
  return json(
    { message: "Successfully created user account" },
    { status: 200 }
  );
};

export default function SignUp() {
  const actionData = useActionData<IActionData>();
  const transition = useTransition();
  console.log("actionData", actionData);
  return (
    <div className="container mt-5 signup">
      <h1>Registration Form</h1>
      <Form method="post">
        <div className="mb-3">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            name="firstName"
            aria-describedby="firstNameError"
          />
          {actionData?.fieldError?.firstName && (
            <div id="firstNameError" className="error">
              {actionData?.fieldError?.firstName}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            name="lastName"
            aria-describedby="lastNameError"
          />
          {actionData?.fieldError?.lastName && (
            <div id="firstNameError" className="error">
              {actionData?.fieldError?.lastName}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            aria-describedby="emailError"
          />
          {actionData?.fieldError?.email && (
            <div id="firstNameError" className="error">
              {actionData?.fieldError?.email}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            aria-describedby="passwordError"
          />
          {actionData?.fieldError?.password && (
            <div id="firstNameError" className="error">
              {actionData?.fieldError?.password}
            </div>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            aria-describedby="confirmPasswordError"
          />
          {actionData?.fieldError?.matchPassword && (
            <div id="firstNameError" className="error">
              {actionData?.fieldError?.matchPassword}
            </div>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          {transition.state === "submitting" ? "Submitting" : "Submit"}
        </button>
        {actionData?.message && (
          <div className="success mb-3">{actionData?.message}</div>
        )}
      </Form>
    </div>
  );
}
