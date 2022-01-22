import { IFormData } from "./../../.history/app/models/signupModel_20220122185120";
import { json } from "remix";
import { IActionData } from "~/models/signupModel";

export const badRequest = (data: IActionData) => {
  return json(data, { status: 400 });
};

export const createUserAccount = async (payload: IFormData): Promise<any> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return "success";
};
