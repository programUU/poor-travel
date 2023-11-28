import './nav.css'

import {getData,getDelayData} from '../../../../api/getData'
import {URL,LAYOUT_ID} from './config'
import render from './nav.art'

/* 接口 */
/* https://www.imooc.com/api/mall-wepApp/index/nav */
/* 获取数据 */
getData(URL)
.then(data => {
    document.getElementById(LAYOUT_ID).innerHTML = render({
        data:data
    })
}).catch(error => {
    console.log(error)
})
