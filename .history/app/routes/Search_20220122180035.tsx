import { useState } from "react";
import { Form, LoaderFunction } from "remix";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  console.log("query", query);
  return {};
};

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
