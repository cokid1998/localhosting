import API from "@/api/api";

export const loginAPI = async (id, password) => {
  const res = await API.post("/api/user/login", {
    username: id,
    password,
  });

  return res;
};

export const signUpAPI = async (userInfo) => {
  const res = await API.post("/api/user/register", {
    ...userInfo,
  });
  console.log(res);

  return res;
};
