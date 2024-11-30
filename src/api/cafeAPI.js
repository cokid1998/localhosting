import API from "@/api/api";

export const getAllCafe = async () => {
  const res = await API.get("/api/cafe/list");
  const { data, status } = res;

  return { data, status };
};

export const getOneCafe = async (id) => {
  const res = await API.get(`/api/cafe/${id}`);
  const { data, status } = res;

  return { data, status };
};

export const getOneCafeDiary = async (id) => {
  const res = await API.get(`/api/diary/${id}`);
  const { data, status } = res;

  return { data, status };
};

export const getMenu = async (id) => {
  const res = await API.get(`/api/menu/${id}`);
  const { data, status } = res;

  return { data, status };
};

export const getReview = async () => {
  const res = await API.get("/api/review/list");
  const { data, status } = res;

  return { data, status };
};
