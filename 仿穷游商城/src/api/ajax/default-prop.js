//常量
import {
    HTTP_GET,
    CONTENT_TYPE_FORM_URLENCODED,
    CONTENT_TYPE_JSON
} from './constants.js'
//默认参数
const DEFAULTS = {
    method: HTTP_GET,
    //请求头携带的数据
    params: null,
    //如果有参数
    /* params:{
        username:'xiaoshuai',
        age:18
    } */
    //程序内部会将其转换 添加到地址后面
    /*  username='xiaoshuai'&age=18   */
    //请求体携带数据
    data: null,  //xhr.send()
    //如果有参数
    /* data:{
        username:'xiaoshuai',
        age:18
    } */
    //或者 data: FormData() 
    /* 发送的数据格式 */
    contentType: CONTENT_TYPE_FORM_URLENCODED,
    /* 响应内容格式 */
    responseType: 'text',
    /* 延迟时间 */
    timeoutTime: 0,
    /* 能否携带Cookie */
    withCredentials: false,

    //方法
    success() { },
    /* http状态码异常 */
    httpCodeError() { },
    /* 请求失败 */
    error() { },
    /* 终止 */
    abort() { },
    /* 超时 */
    timeout() { }
}
export default DEFAULTS;