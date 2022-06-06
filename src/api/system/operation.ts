import { defHttp } from '/@/utils/http/axios';
import { UserParams, UserListItemGetResultModel } from './model/userModel';

enum Api {
  Operation_LIST = '/sysOperationRecord/getSysOperationRecordList',
}

/**
 * @description: Get sample list value
 */

export const operationListApi = (params: UserParams) =>
  defHttp.get<UserListItemGetResultModel>({
    url: Api.Operation_LIST,
    params,
    headers: {
      // @ts-ignore
      ignoreCancelToken: true,
    },
  });
