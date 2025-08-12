/*eslint eqeqeq: ["error", "always"]*/
import { useMutation, useQuery, type UseMutationOptions, type UseQueryOptions } from '@tanstack/react-query';
import axios, { type AxiosError, type AxiosRequestConfig } from 'axios';

type HttpMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

const apiRequest = async <T>(
  method: HttpMethod,
  url: string,
  data?: unknown,
  config?: AxiosRequestConfig
): Promise<T> => {
  try {
    const methodMap = {
      GET: () => axios.get<T>(url, config),
      POST: () => axios.post<T>(url, data, config),
      PUT: () => axios.put<T>(url, data, config),
      PATCH: () => axios.patch<T>(url, data, config),
      DELETE: () => axios.delete<T>(url, config),
    } as const;

    const request = methodMap[method];
    if (!request) {
      throw new Error(`Unsupported HTTP method: ${method}`);
    }

    const response = await request();
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;
    console.error(`API ${method} request to ${url} failed:`, {
      message: axiosError.message,
      status: axiosError.response?.status,
      data: axiosError.response?.data,
    });
    throw axiosError.response?.data ?? axiosError.message;
  }
}

export function useApiQuery<T>(
  queryKey: string[],
  url: string,
  config?: AxiosRequestConfig,
  options?: Omit<UseQueryOptions<T>, 'queryKey' | 'queryFn'>
) {
  return useQuery<T>({
    queryKey,
    queryFn: () => apiRequest<T>("GET", url, undefined, config),
    ...options,
  });
}

export function useApiMutation<
  TResponse,
  TVariables extends Record<string, unknown> = Record<string, unknown>
>(
  method: HttpMethod,
  url: string,
  options?: UseMutationOptions<TResponse, Error, TVariables>
) {
  if (method === "GET") throw new Error(`GET methods aren't used with mutation functions`);

  return useMutation<TResponse, Error, TVariables>({
    mutationFn: (data: TVariables) => apiRequest<TResponse>(method, url, data),
    ...options,
  });
}
