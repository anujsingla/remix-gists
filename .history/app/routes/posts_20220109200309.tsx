import axios from "axios";
import { LoaderFunction, useLoaderData } from "remix";

export interface IPost {
  id: string;
  body: string;
  title: string;
  userId: string;
}

export const loader: LoaderFunction = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
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
