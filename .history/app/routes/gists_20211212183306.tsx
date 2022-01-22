import { Outlet, Link, LoaderFunction, useLoaderData } from "remix";

export interface IGist {
  id: number;
  description: string;
}

export const gistsData: IGist[] = [
  {
    id: 1,
    description: "Gist 1 data",
  },
  {
    id: 2,
    description: "Gist 2 data",
  },
  {
    id: 3,
    description: "Gist 3 data",
  },
];

export const loader: LoaderFunction = () => {
  return gistsData;
};

export default function GistsRoutes() {
  const data = useLoaderData<IGist[]>();
  return (
    <div>
      <div>Gists routes</div>
      <ul>
        {data.map((g) => (
          <li key={g.id}>
            <Link to={`${g.id}`}>{g.description}</Link>
          </li>
        ))}
      </ul>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
