import './tab.css'


/* 只提供主要功能 */
/* 1.发送请求 */
/* 2.切换状态 */
/* 可以提供两个方法 */

/* 根据索引添加样式 */
/* setActiveItem() */
/* 根据索引发送不同的请求 */
/* to(); */

/* 获取的数据让内容区域的方法去做内容的更新 */
/* set(data) */
/* 最终调用是在父组件里面 */


import { getData, getDelayData } from '../../../../api/getData';
import {URL,TAB_ITEM_CLASS,TAB_ACTiVE_ITEM_ClASS} from './config'
/* 接口 */
/* https://www.imooc.com/api/mall-wepApp/destination/content/1 */
/* 后面的1 2 3  就是标签的 data-n */

class Tab{
    /* 通过 el 获取 tab-item  */
    /* 所以这个 el 就是 ul */
    constructor(el){
        this.itemEls = el.querySelectorAll(TAB_ITEM_CLASS);
    }
    /* 添加指定索引对应 dom 元素的样式 */
    setActiveItem(index){
        for(const itemEl of this.itemEls){
            itemEl.classList.remove(TAB_ACTiVE_ITEM_ClASS);
        }
        this.itemEls[index].classList.add(TAB_ACTiVE_ITEM_ClASS);
    }
    /* 切换元素并且发送请求 */
    /* 对获取的数据不做处理 */
    to(index){
        /* 1.取消请求 */
        /* 第一次点击还没有发送请求 不会执行 */
        /* 当第二次点击的时候 第二次的发送还没开始 但是已经存在了发送的请求 */
        /* 会把上一个请求给阻止掉 */
        if(this.dataPromise && this.dataPromise.xhr){
            this.dataPromise.xhr.abort();
        }


        /* 当切换的时候便把样式添加上 */
        this.setActiveItem(index);

        /* 终止请求 */
        /* 先保存一下返回的 promise对象 */
        /* 这个时候这个上面就有了 xhr对象 */
        this.dataPromise = getData(`${URL}/${this.itemEls[index].getAttribute('data-n')}`);

        return this.dataPromise;
        /* 这个结构就是个 Promise 对象 */
        /* 地址根据 index 拼接成不同的接口 */
        /* return getDelayData(`${URL}/${this.itemEls[index].getAttribute('data-n')}`); */
    }
}


export default Tab;


