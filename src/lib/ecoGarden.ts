import axios from "axios";

export const EcoGardenApi = axios.create({
  baseURL: "http://localhost:3333",
});
