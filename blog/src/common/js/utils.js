/**
 * Created by ASH
 * util.js 工具类方法
 */

'use strict'

const util = {
    getRem () {
        // const baseSize = 8
        // // 当前页面宽度相对于 750 宽的缩放比例，可根据自己需要修改。
        // const scale = document.documentElement.clientWidth / 750
        // // 设置页面根节点字体大小
        // document.documentElement.style.fontSize = (baseSize * Math.min(scale, 2)) + 'px'
        // console.log('document.documentElement.style.fontSize', document.documentElement.style.fontSize)


        let htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
        let htmlDom = document.getElementsByTagName('html')[0];
        //设置根元素字体大小
        htmlDom.style.fontSize= htmlWidth/20 + 'px';
    }
}

export default util