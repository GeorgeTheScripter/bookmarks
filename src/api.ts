import axios, { type AxiosInstance } from 'axios';

export const API_ROUTES = {
  profile: `/profile`,
  categories: `/categories`,
};

export const http: AxiosInstance = axios.create({
  baseURL: 'http://localhost:3000/api',
});
