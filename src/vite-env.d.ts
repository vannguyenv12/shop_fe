/// <reference types="vite/client" />

interface ILoginPayload {
  email: string;
  password: string;
}

interface IAuthPayload {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  avatar: string;
}

interface IUserData {
  email: string;
  firstName: string;
  lastName: string;
  avatar: string;
  role: string;
}

interface IErrorResponse {
  message: string;
  status: string;
  statusCode: number;
}

interface ICategory {
  id: number;
  name: string;
  icon: string;
  status: boolean;
}

interface ICategoryResponse {
  message: string;
  data: ICategory[];
}
