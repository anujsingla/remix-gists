import { ActionFunction, Form, LinksFunction } from "remix";
import signupStyle from "~/styles/signup.css";

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
};

export default function SignUp() {
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
