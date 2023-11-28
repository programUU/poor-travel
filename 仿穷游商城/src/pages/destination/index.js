/* 都使用 index.js 利于webpack打包*/
/* 自己的样式 */
import './destination.css';

/* 公共样式 */
/* tabbar */
import '../../assets/styles/layout.css';
import '../../assets/styles/base.css';
import '../../assets/styles/reset.css';



/* 引入公共组件 */
/* tabbar */
import '../../components/tabbar';
/* backtop */
/* 这里就不要导入公共的了*/
/* 导入自己配置好了的 */
import './components/backtop';


/* 私有组件 */
/* 头部 */
import './components/loaction-header'
/* 主体 */
import './components/main'