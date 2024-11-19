import API from "@/api/api";

const getTest = async () => {
  const res = await API.get("/api/cafe/list");
  const { data, status } = res;

  return { data, status };
};

const postTest = async () => {
  const res = await API.post("/posts");
  const { data, status } = res;

  return { data, status };
};

const deleteTest = async () => {
  const res = await API.delete("/posts/1");
  const { data, status } = res;

  return { data, status };
};

const putTest = async () => {
  const res = await API.put("/posts/1");
  const { data, status } = res;

  return { data, status };
};

const patchTest = async () => {
  const res = await API.patch("/posts/1");
  const { data, status } = res;

  return { data, status };
};

export { getTest, postTest, deleteTest, putTest, patchTest };
