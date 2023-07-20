//根据设备加载不同的样式
var setStyle = function (cssarr) {
    var i = 0, len = cssarr.length;
    for (i; i < len; i++) {
        document.write('<link href="' + cssarr[i] + '" type="text/css" rel=stylesheet>');
    }
};
// 判断是否移动端
function goPAGE() {
    if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        // window.location.href="移动端url";
        //  alert("mobile");
        //判断访问环境是 移动端 则加载以下样式
        setStyle(['css/moble.css']);
    }
    else {
        // window.location.href="pc端url"; 
        //   alert("pc")
        setStyle(['css/pc.css']);
    }
}
goPAGE();        // 调用function


// // 因加载缓慢并有弹窗BUG，暂时弃用
// var isFHD = screen.width > 1024 ? true : false;
// 			alert(screen.width + ":" + screen.height);
// 			(function() {
// 				var head = document.getElementsByTagName('HEAD')[0];
				
// 				var style = document.createElement('link');
// 				var js = document.createElement('script');
 
// 				if (isFHD) {
// 					style.href = 'css/pc.css';
// 					// js.src = 'js/main1.js';
// 				} else {
// 					style.href = 'css/moble.css';
// 					// js.src = 'js/main2.js';
// 				}
// 				style.type = 'text/css';
// 				style.rel = 'stylesheet';
// 				// js.type = 'text/javascript';
				
// 				head.appendChild(style);
// 				// head.appendChild(js);
// 			})()
