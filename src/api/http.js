import axios from 'axios';

const http = axios.create({
//   baseURL: 'https://api.example.com', // 根据你的实际需求设置基本 URL
  timeout: 5000, // 设置请求超时时间（可选）
});

// 请求拦截器
http.interceptors.request.use(
  (config) => {
    // 在发送请求之前做一些处理，例如添加请求头等
    // 可以根据需要修改请求配置
    return config;
  },
  (error) => {
    // 处理请求错误
    return Promise.reject(error);
  }
);

// 响应拦截器
http.interceptors.response.use(
  (response) => {
    // 在接收响应数据之前做一些处理
    // 可以根据需要修改响应数据
    return response;
  },
  (error) => {
    // 处理响应错误
    return Promise.reject(error);
  }
);

export default http;