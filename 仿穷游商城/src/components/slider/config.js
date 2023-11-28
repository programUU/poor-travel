/* 配置文件 */


/* Swiper配置文件 */

export default {
    /* 循环模式 */
    loop: true,
    /* 是否需要分页器 */
    pagination: {
        el: '.swiper-pagination',
    },

    /* 是否需要前进后退按钮 */
    /* navigation:{
        nextEl:'.swiper-buutton-next',
        prevEl:'.swiper-button-prev'
    }, */
    /* 是否需要滚动条 */
    /* scrollbar:{
        el:'.swiper-scrollbar'
    }, */
    autoplay:{
        delay:2500
    }
}

export const SWIPER_CONTAINER_CLASS = '.swiper';
export const URL= 'https://www.imooc.com/api/mall-wepApp/index/slider';
export const LAYOUT_ID = 'index-slider';