import axios from "axios";
import { LoaderFunction, useCatch, useLoaderData } from "remix";

export interface IPost {
  id: string;
  body: string;
  title: string;
  userId: string;
}

export const loader: LoaderFunction = async () => {
  const response = await axios.get<IPost[]>(
    "https://jsonplaceholder.typicode.com/posts"
  );
  // throw new Response("not found", { status: 404 });
  return response.data.slice(0, 5);
};

export default function Posts() {
  const data = useLoaderData<IPost[]>();
  return (
    <div>
      Posts details
      {data?.map((d) => (
        <div>{d.title}</div>
      ))}
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      inside post component Status: {caught?.status}
      <div>data: {caught?.data}</div>
    </div>
  );
}
