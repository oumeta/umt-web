import { defHttp } from '/@/utils/http/axios';
import { UserParams, UserListItemGetResultModel } from './model/userModel';
import type { Result } from '/#/axios';

enum Api {
  Menu_LIST = '/menu/getMenuList',
  Menu_Delete = '/menu/deleteBaseMenu',
}

/**
 * @description: Get sample list value
 */

export const menuListApi = (params: UserParams) =>
  defHttp.post<UserListItemGetResultModel>({
    url: Api.Menu_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
export const deleteMenuApi = (params: UserParams) =>
  defHttp.post<Result>({
    url: Api.Menu_Delete,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
