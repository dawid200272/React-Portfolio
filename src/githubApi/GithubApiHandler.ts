import axios from "axios";

const instance = axios.create({
  baseURL: `https://api.github.com/`,
});

export const fetchUserProfile = async (userName: string) => {
  try {
    var response = await instance.get(`users/${userName}`);
    return response.data;
  } catch (error) {
    console.error("fetchUserProfileError", error);
    return;
  }
};

// const fetchPublicRepos = async (): Promise<Array<Todo>> => {
//   try {
//     var response = await instance.get("/todos");
//     return response.data;
//   } catch (error) {
//     console.error(error);
//     return;
//   }
// };
