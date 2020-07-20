import axios from 'axios';

const service = axios.create({
  // process.env.NODE_ENV === 'developement' 判断使用环境
  // baseURL: 'www.baidu.com',
  timeout: 5000
});

// 请求拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
)

// 响应拦截器
service.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return response.data;
    } else {
      return Promise.reject();
    }
  },
  error => {
    return Promise.reject(error);
  }
)

export default service;
