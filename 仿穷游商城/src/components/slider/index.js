import '../../../node_modules/swiper/swiper-bundle.min.css'
import Swiper from '../../../node_modules/swiper/swiper-bundle.min'

import config, { SWIPER_CONTAINER_CLASS, URL, LAYOUT_ID } from './config'
import './slider.css'

/* 导入模板 */
import render from './slider.art'
/* 导入获取数据的方法 */
import { getData, getDelayData } from '../../api/getData'
/* 发送数据 */

/* 获取需要动态插入内容的 dom 元素 */
getData(URL)
    .then(data => {
        /* 传入 config 是为了共同控制功能和样式 */
        /* 获取完数据后换掉之前的loading */
        document.getElementById(LAYOUT_ID).innerHTML = render({
            ...config,
            ...{
                imgs: data
            }
        })
        /* swiper配置 */
        new Swiper(SWIPER_CONTAINER_CLASS, config)
    }).catch(error => {
        console.log(error)
    })









/* 获取数据的接口 */
// https://www.imooc.com/api/mall-wepApp/index/slider