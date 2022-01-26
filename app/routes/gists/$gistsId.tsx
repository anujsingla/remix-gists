import { LinksFunction, LoaderFunction, useCatch, useLoaderData } from "remix";
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
  if (params.gistsId === "1") {
    throw new Response("Id not found in loader", { status: 404 });
  }
  return gistsData.find((g) => g.id === Number(params.gistsId));
};

export default function GistById() {
  const data = useLoaderData<IGist>();
  if (data.id === 2) {
    throw new Error("Gist By ID not found");
  }
  return (
    <div>
      <p>Gist by ID</p>
      <p>Id: {data.id}</p>
      <p>Description: {data.description}</p>
    </div>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <div className="error-container">
      <h1>GistsID level error boundary</h1>
      <pre>{error?.message}</pre>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <div>
      <div>GistsID catch boundary</div>
      Status: {caught?.status}
      <div>data: {caught?.data}</div>
    </div>
  );
}
