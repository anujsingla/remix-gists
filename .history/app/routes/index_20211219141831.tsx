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
      crossorigin: "anonymous",
      integrity:
        "sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3",
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
      <div className="alert alert-primary" role="alert">
        A simple primary alert—check it out!
      </div>
    </div>
  );
}
