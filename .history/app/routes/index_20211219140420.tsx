import { LinksFunction } from "remix";
import navStyle from "../styles/css/nav.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: navStyle,
    },
  ];
};

export default function IndexRoutes() {
  return <div>Top Index routes</div>;
}
