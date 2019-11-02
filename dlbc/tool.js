//鑾峰彇闅忔満鏁存暟
function randomInt(min,max) {
    return Math.round( Math.random()*(max-min) )+min;
}

// 闅忔満棰滆壊
function randomColor() {
    var col = '#';
    var strArr = ['0','1','2','3','4','5','6','7','8','9','a','b','c','d','e','f'];//0-15
    for (var i = 0; i < 6; i++){
        col += strArr[randomInt(0,15)];
    }
    return col;
}

// 閫氳繃绫诲悕鑾峰彇鍏冪礌
function byClass(cla) {
    var tags = document.all ? document.all : document.getElementsByTagName('*');//鍏煎
    var arr = [];
    for (var i = 0; i < tags.length; i++){
        if (tags[i].className == cla) {// 'abc red'?
            arr.push(tags[i]);
        }
    }
    return arr;
}

// 鑾峰彇鏌愪釜鍏冪礌
function $(selector) {
    return document.querySelector(selector);
}

// 鑾峰彇鍏冪礌鏍峰紡
function getStyle(obj,attr) {
    if (obj.currentStyle) {//IE678
        return obj.currentStyle[attr];
    } else {//闈濱E678
        return getComputedStyle(obj,null)[attr];
    }
}

//鑾峰彇鍏冪礌鍒版渶澶栧眰鐨刼ffsetLeft/offsetTop鍊�
function offset(dom) {
    var l = 0, t = 0;
    while(dom){
        l += dom.offsetLeft;
        t += dom.offsetTop;
        // dom = dom.parentNode;
        dom = dom.offsetParent;
        if (dom == document.body) {
            return {Left: l, Top: t};
        }
    }
}

// X鍜孻杞寸紦鍐茶繍鍔�
function move(dom,target,callback) {
    dom.timerFire = null;
    clearInterval(dom.timerFire);
    dom.timerFire = setInterval(function () {
        // x杞磋繍鍔�
        var speedX = (target.left - dom.offsetLeft) / 10;//鎸佺画鍙樺寲鐨勯€熷害
        speedX = speedX > 0 ? Math.ceil(speedX) : Math.floor(speedX);//瀵归€熷害鍙栨暣锛岄伩鍏嶆暟鎹涪澶�
        // 鍓╀綑鐨勮繍鍔ㄩ噺 < 姣忔鎵€璧扮殑杩愬姩閲�
        if (Math.abs(dom.offsetLeft - target.left) <= Math.abs(speedX)) {
            // clearInterval(dom.timerFire);
            dom.style.left = target.left + 'px';//缁堢偣
        } else {
            dom.style.left = dom.offsetLeft + speedX + 'px';
        }

        // y杞磋繍鍔�
        var speedY = (target.top - dom.offsetTop) / 10;//鎸佺画鍙樺寲鐨勯€熷害
        speedY = speedY > 0 ? Math.ceil(speedY) : Math.floor(speedY);//瀵归€熷害鍙栨暣锛岄伩鍏嶆暟鎹涪澶�
        // 鍓╀綑鐨勮繍鍔ㄩ噺 < 姣忔鎵€璧扮殑杩愬姩閲�
        if (Math.abs(dom.offsetTop - target.top) <= Math.abs(speedY)) {
            clearInterval(dom.timerFire);
            dom.style.top = target.top + 'px';//缁堢偣
            callback();//鍥炶皟鍑芥暟
        } else {
            dom.style.top = dom.offsetTop + speedY + 'px';
        }
    },20);
}

// 璁剧疆cookie
function setCookie(key,val,day) {
    if (day) {
        var d = new Date();
        d.setDate(d.getDate() + day);
        // escape  缂栫爜
        document.cookie = key + '=' + escape(val) + '; expires=' + d;
    } else {
        document.cookie = key + '=' + escape(val);
    }
}

// 鑾峰彇cookie
function getCookie(key) {
    var arr1 = document.cookie.split('; ');
    for (var i = 0; i < arr1.length; i++){
        var arr2 = arr1[i].split('=');
        if (arr2[0] == key) {
            // unescape  瑙ｇ爜
            return unescape(arr2[1]);
        }
    }
    return '';
}

// 鍒犻櫎cookie
function removeCookie(key) {
    setCookie(key,'123',-2);//璁剧疆涓鸿繃鏈�
}
