export default function useAuth() {
  return useState<unknown | null>('auth', () => null);
}

export async function login(): Promise<boolean> {
  const auth = useAuth();

  const { data, error } = await useMyFetch<{ user: unknown } | null>('/auth/me');

  if (!data.value) {
    auth.value = null;
    return false;
  }

  auth.value = data.value.user;
  return true;
}
