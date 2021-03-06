import { IFormData } from "./../../.history/app/models/signupModel_20220122185120";
import { json } from "remix";
import { IActionData } from "~/models/signupModel";

export const badRequest = (data: IActionData) => {
  return json(data, { status: 400 });
};

export const createUserAccount = async (payload: IFormData): Promise<any> => {
  await new Promise((resolve) => setTimeout(resolve, 4000));
  return "success";
};

export function validateName(username: string, field: string) {
  if (username.length < 3) {
    return `${field} must be at least 3 characters long`;
  }
}

export function validatePassword(username: string) {
  if (username.length < 6) {
    return `Password must be at least 6 characters long`;
  }
}

export function matchPassword(password: string, confirmPassword: string) {
  if (password !== confirmPassword) {
    return `Password does not match with confirm password`;
  }
}

export function validateEmail(email: unknown) {
  if (
    !String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return `Invalid Email`;
  }
}
