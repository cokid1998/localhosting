import API from "./api";

export const codeUse = async (obj) => {
  const res = await API.post("/api/coupons/use", obj);
  const { data, status } = res;

  return { data, status };
};
