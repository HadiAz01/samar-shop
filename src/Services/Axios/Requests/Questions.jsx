import apiRequests from "../Configs/configs";

const getAllQuestions = () => {
  return apiRequests.get("/questions");
};

export { getAllQuestions };
