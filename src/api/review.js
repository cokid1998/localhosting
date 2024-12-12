import API from "./api";

export const postReview = async (payload) => {
  const res = await API.post("/api/review/add", {
    keyword: "TASTE_GOOD",
    rContent: payload,
    rImage: ["string"],
  });
  const { data, status } = res;

  return { data, status };
};
