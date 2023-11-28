import Backtop from "../../../../components/backtop";


/* 点击返回顶部的目标 dom 元素 */
const backtopEl = document.querySelector('.backtop');
const scrollContainer = document.getElementById('destination-content');
/* 可视区域的高度 */
const viewHeight = scrollContainer.offsetHeight;
new Backtop(backtopEl, viewHeight, scrollContainer)