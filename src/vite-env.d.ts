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

// Common Response

interface IApiResponse<T> {
  message: string;
  data: T;
}

// Category
interface ICategory {
  id: number;
  name: string;
  icon: string;
  status: boolean;
}

interface ICategoryPayload {
  name: string;
  icon: string;
}

// Product
interface IProduct {
  id: number;
  name: string;
  shortDescription: string;
  quantity: number;
  price: number;
  main_image: string;
  categoryId: number;
  shopId: number;
}
