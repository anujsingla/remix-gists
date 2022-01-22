import { Form, LinksFunction } from "remix";
import signupStyle from "~/styles/signup.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: signupStyle,
    },
  ];
};

export default function SignUp() {
  return (
    <div className="container mt-5 signup">
      <h1>Registration Form</h1>
      <Form method="post">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
      </Form>
    </div>
  );
}
