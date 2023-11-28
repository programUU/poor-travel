/* 首页需要使用到返回顶部功能 */
import Backtop from '../../../../components/backtop'


/* 按钮所在容器 */
const scrollContainer = document.getElementById('index-page');
/* 需要改变的 dom 元素 */
const backtopEl = scrollContainer.querySelector('.backtop');

/* window.innerHeight 页面的高度 */

new Backtop(backtopEl,window.innerHeight,scrollContainer)