import axiosClient from './axiosClient';

const categoryApi = {
  getAll() {
    const url = 'categories';
    return axiosClient.get<unknown, ICategoryResponse>(url);
  },
};

export default categoryApi;
