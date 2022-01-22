import { json } from "remix";

export const badRequest = (data) => {
  return json(data, { status: 400 });
};
