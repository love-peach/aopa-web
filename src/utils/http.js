import axios from 'axios';
import qs from 'qs';
import app from '../main';

// 创建实例
const instance = axios.create({});

let cancel = {};
const promiseArr = {};
const { CancelToken } = axios;

// 根据运行环境 配置 baseURL
instance.defaults.baseURL = process.env.VUE_APP_AXIOS_BASE_URL;

// 设置请求默认属性
instance.defaults.timeout = 10000;
instance.defaults.headers['Access-Control-Allow-Origin'] = '*';
instance.defaults.headers.get['X-Requested-With'] = 'XMLHttpRequest';
instance.defaults.headers.post['X-Requested-With'] = 'XMLHttpRequest';
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
instance.defaults.responseType = 'json';

// 数据序列化
instance.defaults.transformRequest = [data => (qs.stringify(data))];

// 请求发送之前的拦截处理
instance.interceptors.request.use((config) => {
  // loading
  app.$Progress.start();
  const token = localStorage.getItem('token') || '';
  if (token) {
    config.headers.Token = token;
  }
  // 发起请求时，取消掉当前正在进行的相同请求
  if (promiseArr[config.url]) {
    promiseArr[config.url]('操作取消');
    promiseArr[config.url] = cancel;
  } else {
    promiseArr[config.url] = cancel;
  }
  console.info('%c 请求地址为：', 'font-size:14px;color:#5cb85c;font-weight:bold;', config);
  return config;
}, (error) => {
  console.log(error, 'interceptors.request error');
  return Promise.reject(error);
});


// 根据请求报错状态码 格式化错误信息
function handleErrMsg(error) {
  if (error && error.response) {
    switch (error.response.status) {
      case 400:
        error.message = '错误请求';
        break;
      case 401:
        error.message = '未授权，请重新登录';
        break;
      case 403:
        error.message = '拒绝访问';
        break;
      case 404:
        error.message = '请求错误,未找到该资源';
        break;
      case 405:
        error.message = '请求方法未允许';
        break;
      case 408:
        error.message = '请求超时';
        break;
      case 500:
        error.message = '服务器端出错';
        break;
      case 501:
        error.message = '网络未实现';
        break;
      case 502:
        error.message = '网络错误';
        break;
      case 503:
        error.message = '服务不可用';
        break;
      case 504:
        error.message = '网络超时';
        break;
      case 505:
        error.message = 'http版本不支持该请求';
        break;
      default:
        error.message = `连接错误${error.response.status}`;
    }
  } else {
    error.message = '连接到服务器失败';
  }
}

// 请求完成之后的拦截处理
instance.interceptors.response.use((response) => {
  app.$Progress.finish();
  console.log('%c 请求结果为：', 'font-size:14px;color:#5cb85c;font-weight:bold;', response);
  return response;
}, (error) => {
  app.$Progress.fail();
  handleErrMsg(error);
  console.log(error.message, 'interceptors.response error');
  return Promise.resolve(error.response);
});


function checkStatus(response) {
  // loading
  // 如果http状态码正常，则直接返回数据
  if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {
    return response;
    // 如果不需要除了data之外的数据，可以直接 return response.data
  }
  // 异常状态下，把错误信息返回去
  return {
    status: -404,
    msg: '网络异常',
  };
}

function checkCode(res) {
  // 如果code异常(这里已经包括网络错误，服务器错误，后端抛出的错误)，可以弹出一个错误提示，告诉用户
  if (res.status === -404) {
    // alert(res.msg);
  }
  if (res.data && res.data.code !== 200) {
    console.log(res, 'res');
    // alert(res.data.dataerror_msg);
  }
  return res.data;
}

export default {
  get(url, params, options) {
    return instance({
      method: 'get',
      url,
      params, // get 请求时带的参数 叫 'params'
      ...options,
      cancelToken: new CancelToken((c) => { cancel = c; }),
    }).then(response => checkStatus(response))
      .then(res => checkCode(res));
  },
  post(url, data, options) {
    return axios({
      method: 'post',
      url,
      data, // post 请求时带的参数 叫 'data'
      ...options,
      cancelToken: new CancelToken((c) => { cancel = c; }),
    }).then(response => checkStatus(response))
      .then(res => checkCode(res));
  },
};
