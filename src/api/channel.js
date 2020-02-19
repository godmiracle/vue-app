/**
 * 获取用户频道列表
 * 如果登录了：获取用户频道列表
 * 没有登录：获取默认推荐的频道列表
 */
import request from '@/utils/request'
// 获取我的频道
export const getUserChannels = () => {
  return request({
    method: 'GET',
    url: 'app/user/channels'
  })
}
// 获取所有频道
export const getAllChannels = () => {
  return request({
    method: 'GET',
    url: '/app/allchannels'
  })
}
