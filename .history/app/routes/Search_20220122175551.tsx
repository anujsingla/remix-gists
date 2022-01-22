import { useState } from "react";
import { Form } from "remix";

export default function Search() {
  // const data = useLoaderData<IPost[]>();
  const [text, setText] = useState("");
  return (
    <div>
      URL Search Params Tutorial
      <Form>
        <input
          value={text}
          onChange={setText}
          type="text"
          name="query"
          id="query"
        />
      </Form>
    </div>
  );
}
