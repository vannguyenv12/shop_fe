import axiosClient from './axiosClient';

const productApi = {
  getAll() {
    const url = 'products';
    return axiosClient.get<unknown, IApiResponse<IProduct[]>>(url);
  },
};

export default productApi;
