/* 当前组件的 CSS */
import './main.css'
/* 导入 loading 模板 */
import '../../../../components/loading'
/* 导入 Tab 实现功能 */
import Tab from '../tab'
/* 导入 Content 类实现功能 */
import Content from '../content'
/* 导入本地存储 */
import { set, get } from '../../../../utils/sessionStorage'


const tabEl = document.getElementById('tab');
const $list = document.getElementById('destination-content');
const tab = new Tab(tabEl);
const content = new Content($list);


/* 根据索引添加样式功能实现 */
/* tab.setActiveItem(2); */
/* 默认显示第一个 tab 内容 */
tab.to(0).then(data => {
    content.setContent(data);
})

/* 第二种方法 */
/* 模拟点击 */
/* 动态绑定点击事件之后直接让第一个dom元素 .click()即可 */
tabEl.addEventListener(
    'click',
    (e) => {
        /* 确当点击到真正想要的元素身上 */
        /* 可能会碰到别的结构 */
        const itemEl = e.target;
        /* if(itemEl.toLowerCase() === "li") */
        if (itemEl.classList.contains('tab-item')) {
            /* 通过设置的 data-n 确定发送何种请求 */
            const index = itemEl.getAttribute('data-n') - 1;

            /* 本地存储 */
            const storageName = `destination_content_${index}`;
            const storageContent = get(storageName);

            if (storageContent) {
                /* 不再需要发送请求了 */
                /* 只需要修改样式 填充内容就行 */
                tab.setActiveItem(index);
                /* 将取出的数据放到本地存储中 */
                content.setContent(storageContent);
            } else {
                /* 返回一个 promise 对象 */
                const tabPromise = tab.to(index);
                /* 如何设置延迟获取那么会出现卡顿 */
                /* 可以先让 loading 代替 */
                content.setLoading();
                tabPromise.then(data => {
                    content.setContent(data);
                    /* 我再保存一份 */
                    set(storageName,data)
                })

            }

        }
    }
)
