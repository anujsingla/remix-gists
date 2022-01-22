import axios from "axios";
import { LoaderFunction } from "remix";

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
  return <div>Posts details</div>;
}
