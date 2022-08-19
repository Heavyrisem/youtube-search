import axios, { AxiosInstance } from 'axios';

export const createAxiosInstance = (API_KEY: string): AxiosInstance => {
  return axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
      key: API_KEY,
    },
  });
};
