//工具函数
import { serialize, addURLData, serializeJSON } from './utils.js'
//默认参数
import DEFAULTS from './default-prop.js'
//常量
import {
    CONTENT_TYPE_FORM_URLENCODED,
    HTTP_GET,
    CONTENT_TYPE_JSON
} from './constants.js'
// Ajax类
class Ajax {
    constructor(url, options) {
        //可以再其他方法中使用这些属性
        this.url = url;
        this.options = Object.assign({}, DEFAULTS, options);
        //初始化
        this.init();
    }

    init() {
        const xhr = new XMLHttpRequest();
        //希望xhr再其他的方法中访问到它
        this.xhr = xhr;
        /* 保存事件 */
        this.bindEvents();

        /* 准备阶段 */
        xhr.open(this.options.method, this.url + this.addParam(), true);

        //设置responseType
        this.setResponseType();

        //设置跨域是否携带 Cookie
        this.setCookie();

        //设置超时
        this.setTimeout();

        //发送请求
        this.sendData();
    }
    /* 绑定事件处理程序 */
    bindEvents() {
        const xhr = this.xhr;
        const { success, error, abort, httpCodeError, timeout } = this.options;
        //添加监听事件
        xhr.addEventListener(
            'load',
            () => {
                if (this.ok()) {
                    success(xhr.response, xhr);
                } else httpCodeError(xhr.status, xhr);
            },
            false
        )

        /* 当遇到错误的时候将触发error事件 */
        xhr.addEventListener(
            'error',
            () => {
                error(xhr);
            },
            false
        )
        xhr.addEventListener(
            'abort',
            () => {
                abort(xhr);
            },
            false
        )
        xhr.addEventListener(
            'timeout',
            () => {
                timeout(xhr);
            },
            false
        )
    }

    /* 检测响应的 Http 状态码是否正常 */
    ok() {
        const xhr = this.xhr;
        return (xhr.status >= 200 && xhr.status < 300)
            || xhr.status === 304;
    }

    /* 添加请求头携带的数据 */
    /* 在地址上添加数据 */
    addParam() {
        const { params } = this.options;
        if (!params) return '';
        ///* 不是null 就必须得是对象 */
        return addURLData(this.url, serialize(params));
    }
    //设置responseType
    setResponseType() {
        this.xhr.responseType = this.options.responseType;
    }
    //设置是否携带Cookie
    setCookie() {
        if (this.options.withCredentials) {
            this.xhr.withCredentials = true;
        }
    }
    /* 设置超时 */
    setTimeout() {
        if (this.options.timeoutTime > 0) {
            this.xhr.timeout = this.options.timeoutTime;
        }
    }
    /* 发送数据 */
    sendData() {
        let { data } = this.options;
        const xhr = this.xhr;
        if (!this.isSendData()) {
            return xhr.send(null);
        }
        let resultData = null;
        //是否发送 FormData 格式的数据
        if (this.isFormData()) {
            resultData = data;
        } else if (this.isFormURLEncoded()) {
            //发送 application/x-www-form-urlencoded 格式的数据
            this.setContentType(CONTENT_TYPE_FORM_URLENCODED);
            resultData = serialize(data);
        } else if (this.isJSONData()) {
            this.setContentType(CONTENT_TYPE_JSON);
            resultData = serializeJSON(data)
        } else {
            //发送其他格式的数据
            this.setContentType();
            resultData = data;
        }

        xhr.send(resultData);
    }

    /* 是否需要send发送数据 */
    isSendData() {
        const { data, method } = this.options;
        if (!data) return false;
        if (method.toLowerCase() === HTTP_GET.toLowerCase())
            return false;
        return true;
    }

    /* 是否是 FormData 格式的数据 */
    isFormData() {
        //判断是否是实例即可
        return this.options.data instanceof FormData;
    }

    /* 是否发送 application/x-www-form-urlencoded 格式的数据 */
    isFormURLEncoded() {
        return this.options.contentType.toLowerCase().
            includes(CONTENT_TYPE_FORM_URLENCODED);
    }

    /* 是否发送 application/json 格式的数据 */
    isJSONData() {
        return this.options.contentType.toLowerCase().
            includes(CONTENT_TYPE_JSON);
    }

    /* 设置 Content-Type */
    setContentType(contentType = this.options.contentType) {
        if (!contentType) return;
        this.xhr.setRequestHeader('Content-Type', contentType)

    }

    /* 获取 XHR对象 */
    getXHR() {
        return this.xhr;
    }
}
export default Ajax;