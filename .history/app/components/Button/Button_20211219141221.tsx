import { LinksFunction } from "remix";
import buttonStyle from "./button.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: buttonStyle,
    },
  ];
};

interface IProps {
  text: string;
}

export function Button({ text }: IProps) {
  return <button className="button">{text || "Button"}</button>;
}
