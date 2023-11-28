import './product.css'
import render from './items.art'

import { getData, getDelayData } from '../../../../api/getData'
import { URL, LAYOUT_ID } from './config'


const xhr = new XMLHttpRequest();
xhr.open('get',URL, true);

xhr.addEventListener(
    'readystatechange',
    ()=>{
        if(xhr.readyState !== 4) return;
        if(xhr.status >= 200 && xhr.status < 300 || xhr.status == 304){
            const jsonData = JSON.parse(xhr.response)
            let html = ''
            for(const item of jsonData.message){
                html += render({
                    data:item.product_list
                })
            } 
            document.getElementById(LAYOUT_ID).innerHTML = html;
        }
    },  
    false
)
xhr.send()





    /* getData(URL)
    .then(data => {
        console.log(data) */
        /* document.getElementById(LAYOUT_ID).innerHTML = render (
            {
                data:data
            }
        ) */
    /* }).catch(error => {
        console.log(error)

    }) */