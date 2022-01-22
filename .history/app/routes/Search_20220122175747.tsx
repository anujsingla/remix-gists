import { useState } from "react";
import { Form } from "remix";

export default function Search() {
  // const data = useLoaderData<IPost[]>();
  const [text, setText] = useState("");
  return (
    <div>
      URL Search Params Tutorial
      <Form method="get">
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          type="text"
          name="query"
          id="query"
        />
        <button type="submit">Search</button>
      </Form>
    </div>
  );
}
