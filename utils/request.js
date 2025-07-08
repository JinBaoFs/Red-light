// utils/request.js
import axios from 'axios'

// 创建实例
const service = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE || '/api', // 你可以在 .env 文件中配置
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token') // 假设你使用 localStorage 存 token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// 响应拦截器
service.interceptors.response.use(
  (response) => {
    // 可根据你的后端结构调整
    const res = response.data
    if (res.code && res.code !== 200) {
      // 显示错误提示
      console.error(res.message || 'Request error')
      return Promise.reject(new Error(res.message || 'Error'))
    }
    return res.data || res
  },
  (error) => {
    if (error.response) {
      const status = error.response.status
      if (status === 401) {
        console.warn('未登录或 token 失效')
        // 可以跳转登录页
      } else if (status === 500) {
        console.error('服务器异常')
      } else {
        console.error(error.response.data.message || '请求出错')
      }
    } else {
      console.error(error.message || '网络连接异常')
    }
    return Promise.reject(error)
  }
)

export default service
