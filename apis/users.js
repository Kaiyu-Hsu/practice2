import { apiHelper } from "./../utils/helpers";
// const getToken = () => localStorage.getItem('token')

export default {
  getPopularUsers() {
    return apiHelper.get(``, {
      // headers: { Authorization: `Bearer ${getToken()}` } 之後會用到
    });
  },
};
