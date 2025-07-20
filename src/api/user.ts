import request from '@/utils/request'

import { type ResponseData } from './type'

export const getUserInfo = () => {
  return request.get<ResponseData<string>>('/user/info')
}
