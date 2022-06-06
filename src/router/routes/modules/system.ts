import type { AppRouteModule } from '/@/router/types';

import { LAYOUT } from '/@/router/constant';
import { t } from '/@/composables/web/useI18n';

const routes: AppRouteModule = {
  path: '/system',
  name: 'SystemPage',
  component: LAYOUT,
  redirect: '/system/user',
  meta: {
    orderNo: 500,
    icon: 'akar-icons:circle-check',
    title: '系统管理',
  },
  children: [
    {
      path: 'user',
      name: 'userPage',
      component: () => import('/@/views/system/user.vue'),
      meta: {
        title: '用户管理',
      },
    },
    {
      path: 'operation',
      name: 'operationPage',
      component: () => import('/@/views/system/operation/index.vue'),
      meta: {
        title: '操作历史',
      },
    },
    {
      path: 'menu',
      name: 'menuPage',
      component: () => import('/@/views/system/menu/index.vue'),
      meta: {
        title: '菜单管理',
      },
    },
    {
      path: 'roler',
      name: 'rolerPage',
      component: () => import('/@/views/system/roler/index.vue'),
      meta: {
        title: '角色管理',
      },
    },
    {
      path: 'amis',
      name: 'amisPage',
      component: () => import('/@/views/system/amisui/index.vue'),
      meta: {
        title: 'amis',
      },
    },
  ],
};

export default routes;
