import { useState } from "react";
import { Form, LoaderFunction, useSearchParams } from "remix";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.searchParams.get("query");
  console.log("query", query);
  return {};
};

export default function Search() {
  // const data = useLoaderData<IPost[]>();
  const [text, setText] = useState("");
  const [searchParams, setSearchParams] = useSearchParams("");
  // searchParams - object of URLSearchParams
  // setSearchParams - helps to update value
  const queryString = searchParams.get("query");

  const updateURL = () => {
    setSearchParams({ query: "anuj" });
  };

  return (
    <div>
      URL Search Params Tutorial
      {queryString && (
        <div>
          <b>Searched query string: </b> {queryString}
          <br />
          <br />
          <button onClick={updateURL}>Update URL</button>
        </div>
      )}
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
