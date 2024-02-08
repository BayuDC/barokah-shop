export default function useScrollTo() {
  return {
    scrollToProduct() {
      const banner = document.getElementById('banner');
      window.scrollTo({ top: banner?.offsetHeight + 60, behavior: 'smooth' });
    },
  };
}
