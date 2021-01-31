import VueApp from './App.vue'
import { createSSRApp, createApp } from 'vue'
import { router } from './router';
import isSSR from './helpers/ssr';

export function createVueApp() {
  const app = (isSSR ? createSSRApp : createApp)(VueApp);
  
  app.use(router);

  return {
    app,
    router
  };
}