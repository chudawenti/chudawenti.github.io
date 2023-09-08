
function remSize() {
    var deviceWith = document.documentElement.clientWidth || window.innerWidth
    if (deviceWith > 750) {
        deviceWith = 750
    }
    if (deviceWith < 320) {
        deviceWith = 320
    }

    //设置rem
    document.documentElement.style.fontSize = (deviceWith / 7.5) + 'px'

    document.querySelector('body').style.fontSize = 0.3 + 'rem'

};

//当窗口变化就调用
remSize()


//当浏览器被重置大小时执行Javascript代码
window.onresize = function () {
    remSize()
}