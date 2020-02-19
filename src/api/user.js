/* eslint-disable space-before-function-paren */
/**
 * 用户相关的请求模块
 */
import request from '@/utils/request'

// 用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/app/authorizations',
    data
  })
}
// 验证码
export function sendSmsCode(mobile) {
  return request({
    method: 'GET',
    url: `/app/sms/codes/${mobile}`
  })
}
//  获取当前登录用户个人信息
export const getUserInfo = () => {
  return request({
    method: 'GET',
    url: '/app/user'
  })
}
/**
 * 获取用户个人资料
 */
export function getProfile(userId) {
  return request({
    method: 'GET',
    url: '/app/user/profile'
  })
}
// 更新用户头像
export function updateUserPhoto(formData) {
  return request({
    method: 'PATCH',
    url: '/app/user/photo',
    // Content-Type multipart/form-data
    // 必须传递 FormData 对象
    data: formData
  })
}
/**
 * 更新用户照片资料
 */
export function updateUserProfile(data) {
  return request({
    method: 'PATCH',
    url: '/app/user/profile',
    data
  })
}
