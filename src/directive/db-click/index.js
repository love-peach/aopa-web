import dbClick from './dbClick';

const install = (Vue) => {
  Vue.directive('dbClick', dbClick);
};

if (window.Vue) {
  window.dbClick = dbClick;
  Vue.use(install); // eslint-disable-line
}

dbClick.install = install;
export default dbClick;
