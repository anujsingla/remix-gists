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
      <Form method="post"></Form>
    </div>
  );
}
