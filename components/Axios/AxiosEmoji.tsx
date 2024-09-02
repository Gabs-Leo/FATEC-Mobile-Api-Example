import axios, { AxiosInstance } from "axios";

export const AxiosEmoji = axios.create({
  baseURL: `https://api.giphy.com/v2/emoji?api_key=${process.env.API_KEY}&limit=10&offset=0`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
