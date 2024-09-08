import axiosClient from './axiosClient';

const productApi = {
  getAll() {
    const url = 'products';
    return axiosClient.get<unknown, IApiResponse<IProduct[]>>(url);
  },
  create(formData: FormData) {
    const url = 'products';
    return axiosClient.post(url, formData);
  },
  delete(id: number) {
    const url = `products/${id}`;
    return axiosClient.delete<unknown, IApiResponse<undefined>>(url);
  },
};

export default productApi;
