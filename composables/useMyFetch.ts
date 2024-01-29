import { useFetch } from '#app';

type useFetchType = typeof useFetch;

export const useMyFetch: useFetchType = (path, options?) => {
  const config = useRuntimeConfig();

  return useFetch(path, {
    baseURL: config.public.apiUrl,
    ...options,
  });
};
