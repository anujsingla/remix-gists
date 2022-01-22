import { LinksFunction, LoaderFunction, useLoaderData } from "remix";
import { gistsData, IGist } from "../gists";
import gistsIdStyle from "../../styles/gistsId.css";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: gistsIdStyle,
    },
  ];
};

export const loader: LoaderFunction = ({ params }) => {
  // console.log("params", params);
  return gistsData.find((g) => g.id === Number(params.gistsId));
};

export default function GistById() {
  const data = useLoaderData<IGist>();
  // console.log(data);
  return (
    <div>
      <p>Gist by ID</p>
      <p>Id: {data.id}</p>
      <p>Description: {data.description}</p>
    </div>
  );
}
