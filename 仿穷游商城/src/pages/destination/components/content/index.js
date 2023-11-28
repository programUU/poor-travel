import './content.css'
//导入内容模板
import render from './content.art'
//导入loading模板
import renderLoading from '../../../../components/loading/loading.art'


/* 提供的功能就是将获取的数据放到容器内 */
class Content{
    constructor(el){
        /* 需要动态导入内容的 dom 元素 */
        this.el = el;
    }

    setContent(data){
        this.el.innerHTML = render({
            item:data
        })
    }
    /* 如果没有数据那么显示 loading 状态 */
    /* 不需要传数据把整个模板传进来就行 */
    setLoading(){
        this.el.innerHTML = renderLoading({
        })
    }
}

export default Content