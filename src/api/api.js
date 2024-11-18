import axios from "axios";

export default class API {
  static instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
  });

  static get(...params) {
    return this.instance.get(...params);
  }

  static post(...params) {
    return this.instance.post(...params);
  }

  static delete(...params) {
    return this.instance.delete(...params);
  }

  static put(...params) {
    return this.instance.put(...params);
  }

  static patch(...params) {
    return this.instance.patch(...params);
  }
}
