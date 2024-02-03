import Vue3Toastify, { toast } from 'vue3-toastify';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Toastify, {
    autoClose: 2000,
    position: toast.POSITION.BOTTOM_CENTER,
    theme: 'dark',
    limit: 3,
  });

  return {
    provide: { toast },
  };
});
