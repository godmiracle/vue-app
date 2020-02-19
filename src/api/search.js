/* eslint-disable space-before-function-paren */
import request from '@/utils/request'
// 获取搜索建议
export const getSuggestions = q => {
  return request({
    method: 'GET',
    url: '/app/suggestion',
    params: {
      q
    }
  })
}
// 获取搜索结果
export function getSearch(params) {
  return request({
    method: 'GET',
    url: '/app/search',
    params
  })
}
