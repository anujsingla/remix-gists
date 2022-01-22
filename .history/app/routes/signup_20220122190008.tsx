import {
  ActionFunction,
  Form,
  json,
  LinksFunction,
  useActionData,
} from "remix";
import { IActionData } from "~/models/signupModel";
import signupStyle from "~/styles/signup.css";
import { badRequest, createUserAccount } from "~/utils.ts/signupUtils";

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
  await createUserAccount(payload);
  return json(
    { message: "Successfully created user account" },
    { status: 200 }
  );
};

export default function SignUp() {
  const actionData = useActionData<IActionData>();
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
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </Form>
    </div>
  );
}
