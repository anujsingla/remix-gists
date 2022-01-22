import { LinksFunction } from "remix";
import userStyle from "../styles/userdetails.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: userStyle,
    },
  ];
};

export default function UserDetails() {
  return <div>User Details route</div>;
}
