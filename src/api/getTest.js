import API from "@/api/api";

const Test = async () => {
  const res = await API.get("/todos");
  const { data, status } = res;

  return { data, status };
};

export default Test;
