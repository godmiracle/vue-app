/**
 * 文章接口模块
 */
import request from '@/utils/request'

/**
 * 获取频道的文章列表
 */
export const getArticles = params => {
  return request({
    method: 'GET',
    url: '/app/articles',
    params
  })
}
