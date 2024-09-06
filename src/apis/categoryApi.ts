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
  delete(id: number) {
    const url = `categories/${id}`;
    return axiosClient.delete<unknown, IApiResponse<undefined>>(url);
  },
};

export default categoryApi;
