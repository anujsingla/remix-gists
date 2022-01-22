interface IProps {
  text: string;
}

export function Button({ text }: IProps) {
  return <button className="button">{text || "Button"}</button>;
}
