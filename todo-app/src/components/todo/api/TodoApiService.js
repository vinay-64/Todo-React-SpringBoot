import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

// export const retrieveAllTodosForUsername = (username) =>
//   apiClient.get(`/users/${username}/todos`);
// //http://localhost:8080/users/in28minutes/todoss

export const retrieveAllTodosForUsernameApi = (username) =>
  apiClient.get(`/users/${username}/todos`);
//http://localhost:8080/users/in28minutes/todos

export const deleteTodoApi = (username, id) =>
  apiClient.delete(`/users/${username}/todos/${id}`);
//http://localhost:8080/users/in28minutes/todos
