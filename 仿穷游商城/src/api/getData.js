/* 获取数据 */
import { getJSON } from './ajax/index.js'
import {SUCC_CODE,TIME_OUT} from './config.js'

const getData = (url, options) => {
    /* 保存一下这个 promise对象 */
    /* xhr 在 getJSON 返回的 promise上 */
    const ajaxPromise = getJSON(url, {
        timeoutTime: TIME_OUT,
        ...options
    });
    const resultPromise = ajaxPromise.then(response => {
        //{ code : 200 data:[]}
        if (response.code !== SUCC_CODE) {
            throw new Error(`出错了：${response.code}`)
        }
        return response.data;
    }).catch(error => {
        console.log(error);
    });
    /* xhr 现在在 ajaxPromise 上面*/
    resultPromise.xhr = ajaxPromise.xhr;
    return resultPromise;

    /* 如果用户没有传延迟 那就用我们的 */
    /* 反之用用户设置的 */
    /*  return getJSON(url, {
        timeoutTime: TIME_OUT,
        ...options
    }).then(response => {
        //{ code : 200 data:[]}
        if (response.code !== SUCC_CODE) {
            throw new Error(`出错了：${response.code}`)
        }
        return response.data;
    }).catch(error => {
        console.log(error);
    }) */
}

/* 延迟获取数据 */
const delay = ms => {
    return new Promise(resolve => {
        setTimeout(resolve,ms);
    })
}

//获取延迟的数据
const getDelayData = (url,options) => {
    return delay(1000).then(()=> {
        return getData(url,options);
    })
}
export { getData,getDelayData };