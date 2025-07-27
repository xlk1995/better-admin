import axios from 'axios'

import { message } from 'antd'

import {
  RequestErrorCode,
  RequestSuccessCode
} from '@/constant'

import { hideLoading, showLoading } from './loading'
import storage from './storage'

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 10000,
  timeoutErrorMessage: '请求超时，请稍后再试',
  withCredentials: true
})

request.interceptors.request.use(
  config => {
    // 可以在这里添加请求拦截逻辑
    showLoading()
    const token = storage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return {
      ...config
    }
  },
  error => {
    hideLoading()
    return Promise.reject(error as Error)
  }
)

request.interceptors.response.use(
  response => {
    // 可以在这里添加响应拦截逻辑
    const data = response.data
    hideLoading()
    if (data.code === RequestErrorCode.UNAUTHORIZED) {
      // 处理未授权的情况
      storage.clear()
      window.location.href = '/login'
      message.error('登录失效，请重新登录')
      return Promise.reject(new Error('Unauthorized'))
    }

    if (data.code !== RequestSuccessCode) {
      message.error(data.msg || '服务器开小差了~')
      return Promise.reject(new Error(data.msg || 'Error'))
    }
    return response.data
  },
  error => {
    hideLoading()
    return Promise.reject(error as Error)
  }
)

export default {
  get<T>(url: string, params?: object): Promise<T> {
    return request.get(url, { params })
  },
  post<T>(url: string, data?: object): Promise<T> {
    return request.post(url, data)
  }
}
