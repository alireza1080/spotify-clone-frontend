import axios from "axios";
import { config } from "dotenv";

config();

const apiUrl = process.env.API_URL;

const api = axios.create({
  baseURL: apiUrl,
  withCredentials: true,
});

export default api;
