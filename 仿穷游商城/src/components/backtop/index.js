/* 主要实现返回顶部功能 */
import './backtop.css'
import '../../assets/fonts/backtop/iconfont.css'

/* 导出去谁想使用谁就实例化这个类*/
/* 传入参数就行 */


/* 滚动实现返回按钮消失 */
const CHANGED_CLASS_NAME = 'backtop-hidden';
/* 初始状态 */
const INIT_STATE = 'init';
/* 改变之后的状态 */
const CHANGED_STATE = 'changed';

/* 实现代码复用 */
class Backtop {
    constructor(el, critical_point, scrollContainer,
        eventEl = scrollContainer) {
        /* dom元素 */
        this.el = el;
        /* 基准点 */
        /* 这里的基准点是 当滚动到一个页面高度的时候 */
        /* 无所谓 自由设置 */
        this.critical_point = critical_point;
        /* 滚动条所在容器 */
        this.scrollContainer = scrollContainer;
        /* 监听滚动条事件的元素 */
        this.eventEl = eventEl;

        this.setState(INIT_STATE);

        this.bindEvent();
    }
    /* 设置初始状态 防止多次执行scroll */
    setState(state) {
        this.state = state;
    }
    /* 绑定事件 */
    bindEvent() {
        /* 如果滚动条出现在 body、html 上  */
        /* 需要用 window 监听滚动事件 */
        /* 这个时候获取滚动高度 */
        /* document.body.scrollTop || document.documentElement.scrollTop */

        this.eventEl.addEventListener(
            'scroll',
            () => {
                /* 滑动一次多次执行 */
                if (this.needChange()) {
                    this.setState(CHANGED_STATE);
                    /* state = CHANGED_STATE; */
                    /* headerEl.classList.add(CHANGED_CLASS_NAME); */
                    this.change();
                } else if (this.needReset()) {
                    this.setState(INIT_STATE);
                    this.add();
                    /* state = INIT_STATE; */
                    /* headerEl.classList.remove(CHANGED_CLASS_NAME); */
                }
            },
            false
        ),
        this.el.addEventListener(
            'click',
            ()=>{
                /* 跳转 */
                this.scrollTo();
            },
            false
        )
    }
    /* 点击返回顶部 */
    scrollTo(top = 0,left = 0){
        this.scrollContainer.scrollTo({
            top,
            left,
            /* 行为参数 */
            /* 规定了滚动过程中什么样的行为 */
            /* 光滑的行为 */
            behavior:'smooth'
        })
    }
    /* 是否需要还原 */
    needReset() {
        return this.state !== INIT_STATE && this.scrollContainer.scrollTop <= this.critical_point;
    }
    /* 是否需要变化 */
    needChange() {
        return this.state !== CHANGED_STATE && this.scrollContainer.scrollTop > this.critical_point;
    }

    /* 改变 */
    /* 当滚动到一定程度  移除消失的样式 */
    change() {
        this.el.classList.remove(CHANGED_CLASS_NAME);
    }

    /* /* 当滚回到一定程度  添加消失的样式 */ 
    add(){
        this.el.classList.add(CHANGED_CLASS_NAME);
    }
}

export default Backtop
