import API from "@/api/api";
import { setCookie } from "@/util/cookies";

export const loginAPI = async (id, password) => {
  const res = await API.post("/api/user/login", {
    username: id,
    password,
  });

  setCookie("role", res.data.role);
  setCookie("accessToken", res.data.accessToken);
  setCookie("refreshToken", res.data.refreshToken);
  window.location.reload();
  return res;
};

export const signUpAPI = async (userInfo) => {
  const res = await API.post("/api/user/register", {
    ...userInfo,
  });
  return res;
};
