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
};

export default productApi;
