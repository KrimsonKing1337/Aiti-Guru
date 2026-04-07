import axios from 'axios';
import type { AxiosError } from 'axios';

export type ApiErrorData = {
  message?: string;
};

export type ApiError = AxiosError<ApiErrorData>;

export const isApiError = (error: unknown): error is ApiError => {
  return axios.isAxiosError(error);
};

export const getApiErrorMessage = (error: unknown): string => {
  if (!isApiError(error)) {
    return 'Unknown error';
  }

  return error.response?.data?.message ?? error.message ?? 'Unknown error';
};
