import Header from '../../../../components/header/index.js'
import '../../../../components/searchbox'
const scrollContainer = document.getElementById('index-page');
const headerEl = scrollContainer.querySelector('.header')

/* 实例化对象 */
/* 实现滚动改变颜色功能 */
new Header(headerEl, 0, scrollContainer);
