import axiosClient from './axiosClient';

const authApi = {
  register(data: IAuthPayload) {
    const url = 'auth/register';
    return axiosClient.post(url, data);
  },
};

export default authApi;
