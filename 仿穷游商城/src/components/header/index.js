import './header.css'


/* 实现滚动改变颜色 */

const CHANGED_CLASS_NAME = 'header-transition';
/* 初始状态 */
const INIT_STATE = 'init';
/* 改变之后的状态 */
const CHANGED_STATE = 'changed';

/* 实现代码复用 */
class Header {
    constructor(el, critical_point, scrollContainer,
        eventEl = scrollContainer) {
        /* dom元素 */
        this.el = el;
        /* 基准点 */
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
                    this.delete();
                    /* state = INIT_STATE; */
                    /* headerEl.classList.remove(CHANGED_CLASS_NAME); */
                }
            },
            false
        )
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
    change() {
        this.el.classList.add(CHANGED_CLASS_NAME);
    }

    /* 删除样式 */
    delete(){
        this.el.classList.remove(CHANGED_CLASS_NAME);
    }
}


export default Header;


