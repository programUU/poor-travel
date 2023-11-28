//工具函数
//数据序列化成 urlencoded 格式的字符串
const serialize = param => {
    const result = [];
    for (const [key, value] of Object.entries(param)) {
        result.push(`${encodeURIComponent(key)}=${encodeURIComponent(value)}`);
    }
    return result.join('&');
}
/* 数据序列化成 JSON 格式的字符串 */
const serializeJSON = param => {
    return JSON.stringify(param);
}
//给url 添加参数
//www.imooc.com?words=js&
const addURLData = (url, data) => {
    if (!data) return '';

    const mark = url.includes('?') ? '&' : '?';
    return `${mark}${data}`;
}
export { serialize, addURLData, serializeJSON }