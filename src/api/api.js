import axios from "axios";

export default class API {
  static instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  });

  static get(...params) {
    return this.instance.get(...params);
  }
}
