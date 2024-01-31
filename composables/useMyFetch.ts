import { useFetch } from '#app';

type useFetchType = typeof useFetch;

export const useMyFetch: useFetchType = (path, options?) => {
  const config = useRuntimeConfig();
  const token = useLocalStorage('token', '');

  return useFetch(path, {
    baseURL: config.public.apiUrl,
    headers: {
      Accept: 'application/json',
      Authorization: token.value ? `Bearer ${token.value}` : '',
    },
    ...options,
  });
};
