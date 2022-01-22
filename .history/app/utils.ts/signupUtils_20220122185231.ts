import { json } from "remix";
import { IActionData } from "~/models/signupModel";

export const badRequest = (data: IActionData) => {
  return json(data, { status: 400 });
};
