import type { BasicColumn } from '/@/components/Table/src/types/table';
import { NAvatar } from 'naive-ui';

export const columns = [
  {
    title: 'id',
    key: 'ID',
    width: 100,
  },
  {
    title: '路由名称',
    key: 'name',
    width: 100,
  },
  {
    title: '路由path',
    key: 'path',
    width: 100,
  },
  {
    title: '是否隐藏',
    key: 'hidden',
    width: 100,
  },

  {
    title: '文件路径',
    key: 'component',
    width: 160,
  },
  {
    title: '展示名称',
    key: 'meta.title',
    width: 160,
  },
  {
    title: '图标',
    key: 'icon',
    width: 160,
  },
] as BasicColumn[];
