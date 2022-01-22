export interface IFormData {
  firstName: string | undefined;
  lastName: string | undefined;
  email: string | undefined;
  password: string | undefined;
  confirmPassword: string | undefined;
  matchPassword?: string | undefined;
}

export interface IActionData {
  formError?: string;
  fieldError?: IFormData;
  fields?: IFormData;
  message?: string;
}
