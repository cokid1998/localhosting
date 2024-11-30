import API from "@/api/api";

export const getCafes = async () => {
  const res = await API.get("/api/cafe/list");
  const { data, status } = res;

  return { data, status };
};
