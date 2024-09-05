import axiosClient from './axiosClient';

const authApi = {
  register(data: IAuthPayload) {
    const url = 'auth/register';
    return axiosClient.post(url, data);
  },
  login(data: ILoginPayload) {
    const url = 'auth/login';
    return axiosClient.post(url, data);
  },
  getMe() {
    const url = 'users/me';
    return axiosClient.get<unknown, IUserData>(url);
  },
  logout() {
    const url = 'auth/logout';
    return axiosClient.post(url);
  },
};

export default authApi;
