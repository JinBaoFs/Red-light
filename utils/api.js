// utils/api.js
import request from './request'

export const get = (url, params = {}, config = {}) =>
  request.get(url, { params, ...config })

export const post = (url, data = {}, config = {}) =>
  request.post(url, data, config)

export const put = (url, data = {}, config = {}) =>
  request.put(url, data, config)

export const del = (url, config = {}) =>
  request.delete(url, config)
