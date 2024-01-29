export function useQuery<T>(key: string) {
  const route = useRoute();
  const query = ref<T>();

  watchImmediate(
    () => route.query,
    () => (query.value = route.query[key] as T),
  );

  return query;
}
