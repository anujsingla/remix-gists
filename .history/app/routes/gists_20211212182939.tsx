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

export default function GistsRoutes() {
  return (
    <div>
      <div>Gists routes</div>
    </div>
  );
}