import axios from "axios";
import { LoaderFunction } from "remix";


export const loader: LoaderFunction = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    retunr response.data;
}

export default function Posts() {
  return <div>Posts details</div>;
}
