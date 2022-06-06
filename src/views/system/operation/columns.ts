import type { BasicColumn } from '/@/components/Table/src/types/table';
import { NAvatar } from 'naive-ui';

export const columns = [
  {
    title: 'id',
    key: 'ID',
    width: 100,
  },
  {
    title: '时间',
    key: 'CreatedAt',
    width: 100,
  },
  {
    title: '状态',
    key: 'status',
    width: 100,
  },
  {
    title: '请求方法',
    key: 'method',
    width: 100,
  },

  {
    title: '请求路径',
    key: 'path',
    width: 160,
  },
] as BasicColumn[];
