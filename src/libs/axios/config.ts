import { STORAGE_KEYS } from '@/constants/shared.const';
import { handleUnauthorizedError } from '@/libs/axios/util';
import { TFailureResponse, TSuccessResponse } from '@/models/types/auth.type';
import { convertToCamelCase, convertToSnakeCase } from '@/utils/shared.util';
import asyncStorage from '@react-native-async-storage/async-storage';
import axios, { AxiosError, AxiosResponse, HttpStatusCode } from 'axios';
import { stringify } from 'qs';

export const axiosInstance = axios.create({
  baseURL: process.env.API_BASE_URL || 'http://localhost:8080',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  paramsSerializer: (params) => stringify(params, { indices: true }),
});

axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = await asyncStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN);

    if (config.data && !(config.data instanceof FormData))
      config.data = convertToSnakeCase(config.data);
    if (config.params) config.params = convertToSnakeCase(config.params);
    if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;

    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response: AxiosResponse<TSuccessResponse>) => {
    if (response.data) response.data = convertToCamelCase(response.data);
    return response;
  },
  (error: AxiosError<TFailureResponse>) => {
    const statusCode = error.response?.status;

    if (statusCode === HttpStatusCode.Unauthorized)
      handleUnauthorizedError(error);

    return Promise.reject(error);
  },
);
