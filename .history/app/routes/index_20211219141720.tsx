import { LinksFunction } from "remix";
import { Button, buttonLinks } from "~/components/Button/Button";
import navStyle from "../styles/css/nav.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: navStyle,
    },
    {
      rel: "stylesheet",
      href: "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css",
    },
    ...buttonLinks(),
  ];
};

export default function IndexRoutes() {
  return (
    <div>
      Top Index routes
      <ul className="nav">
        <li>Gist 1</li>
        <li>Gist 2</li>
      </ul>
      <Button text="Primary Button" />
    </div>
  );
}
