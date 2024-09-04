/// <reference types="vite/client" />

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
