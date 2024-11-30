import API from "@/api/api";

export const getAllCafe = async () => {
  const res = await API.get("/api/cafe/list");
  const { data, status } = res;

  return { data, status };
};
