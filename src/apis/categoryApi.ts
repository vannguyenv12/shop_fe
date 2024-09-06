import axiosClient from './axiosClient';

const categoryApi = {
  getAll() {
    const url = 'categories';
    return axiosClient.get<unknown, IApiResponse<ICategory[]>>(url);
  },
  create(data: ICategoryPayload) {
    const url = 'categories';
    return axiosClient.post<unknown, IApiResponse<ICategory>>(url, data);
  },
};

export default categoryApi;
