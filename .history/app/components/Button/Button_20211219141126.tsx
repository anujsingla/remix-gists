interface IProps {
  text: string;
}

export function Button({ text }: IProps) {
  return <button className="">{text || "Button"}</button>;
}
