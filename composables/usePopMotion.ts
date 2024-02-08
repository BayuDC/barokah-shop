import type { Variant } from '@vueuse/motion';

export function useWaitVisible(target: Ref<HTMLElement | null>, appear: () => void) {
  const { stop } = useIntersectionObserver(
    target,
    ([{ isIntersecting }]) => {
      if (isIntersecting) {
        appear();
        stop();
      }
    },
    { rootMargin: '100px' },
  );
}

export default function usePopMotion(target: Ref<HTMLElement | null>, before: Variant, after: Variant) {
  const { apply } = useMotion(target, {
    initial: before,
  });
  useWaitVisible(target, () => {
    apply(after);
  });
}
