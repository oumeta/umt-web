import 'uno.css';
import '/@/design/index.less';

import { createApp } from 'vue';
import App from './App.vue';

import { initAppConfigStore } from '/@/logics/initAppConfig';
import router, { setupRouter } from '/@/router';
import { setupRouterGuard } from '/@/router/guard';
import { setupStore } from '/@/store';
import { setupGlobDirectives } from '/@/directives';
import { setupI18n } from '/@/locales/setupI18n';
import { createWorker } from 'root/mock/_createMswWorker';
import 'amis/lib/themes/default.css';
import 'amis/lib/helper.css';
import 'amis/sdk/sdk.js';
async function bootstrap() {
  createWorker();

  const app = createApp(App);

  // Configure store
  setupStore(app);

  // Initialize internal system configuration
  initAppConfigStore();

  // Configure routing
  setupRouter(app);

  // router-guard
  setupRouterGuard(router);

  // Multilingual configuration
  await setupI18n(app);

  // Register global directive
  setupGlobDirectives(app);

  await router.isReady();

  app.mount('#app', true);
}

void bootstrap();
