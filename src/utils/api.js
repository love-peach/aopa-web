const urlPrefix = process.env.VUE_APP_URL_PREFIX;

export default {
  right: '/topic/5433d5e4e737cbe96dcef312', // 正确路径
  error: '/topc/5433d5e4e737cbe96dcef312', // url错误
  backEnd: '/topic/5433d5e4e737cbe96dcef31', // 参数错误
  demo: 'https://www.apiopen.top/satinApi',
  poems: `${urlPrefix}/singlePoetry`,
};
