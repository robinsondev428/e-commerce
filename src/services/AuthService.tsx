import axios from 'axios';

const API_URL = "http://localhost:8080/api/auth/";

export const login = (username: string, password: string) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(res.data));
      }
      return res.data;
    });
};

export const isAuthenticated = () => {
  const user = localStorage.getItem('user');
  if (!user) {
    return {}
  }
  return JSON.parse(user);
}

export const logout = () => {
  localStorage.removeItem('user');
}
