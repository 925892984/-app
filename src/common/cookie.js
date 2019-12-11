//定义全局函数  
//作用:操作cookie
// exports.install = function(Vue) {
// 	Vue.prototype.CookieUtil = {
// 		get: function(name) {
// 			var cookieName = encodeURIComponent(name) + "=",
// 				cookieStart = document.cookie.indexOf(cookieName),
// 				cookieValue = null;
// 
// 			if (cookieStart > -1) {
// 				var cookieEnd = document.cookie.indexOf(";", cookieStart);
// 				if (cookieEnd == -1) { //即只有一个cookie
// 					cookieEnd = document.cookie.length;
// 				}
// 				cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
// 			}
// 			return cookieValue;
// 		},
// 
// 
// 		set: function(name, value, expires, path, domain, secure) {
// 			var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
// 			if (expires instanceof Date) {
// 				var exp = new Date()
// 				exp.setTime(exp.getTime() + expires*24*60*60*1000)
// 				cookieText += "; exprice=" + exp.toGMTString();
// 			}
// 			if (path) {
// 				cookieText += "; path=" + path;
// 			}
// 			if (domain) {
// 				cookieText += "; domain=" + domain;
// 			}
// 			if (secure) {
// 				cookieText += "; secure";
// 			}
// 			document.cookie = cookieText;
// 		},
// 		unset: function(name, path, domain, secure) {
// 			this.set(name, "", new Date(0), path, domain, secure);
// 		},
// 	}
// }
function getCookie(name) {
	var cookieName = encodeURIComponent(name) + "=",
		cookieStart = document.cookie.indexOf(cookieName),
		cookieValue = null;

	if (cookieStart > -1) {
		var cookieEnd = document.cookie.indexOf(";", cookieStart);
		if (cookieEnd == -1) { //即只有一个cookie
			cookieEnd = document.cookie.length;
		}
		cookieValue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
	}
	return cookieValue;
}

function setCookie(name, value, expires, path, domain, secure) {
	var cookieText = encodeURIComponent(name) + "=" + encodeURIComponent(value);
	if (expires instanceof Date) {
		var exp = new Date()
		exp.setTime(exp.getTime() + expires * 24 * 60 * 60 * 1000)
		cookieText += "; exprice=" + exp.toGMTString();
	}
	if (path) {
		cookieText += "; path=" + path;
	}
	if (domain) {
		cookieText += "; domain=" + domain;
	}
	if (secure) {
		cookieText += "; secure";
	}
	document.cookie = cookieText;
}

function delCookie(name, path, domain, secure) {
	this.setCookie(name, "", new Date(0), path, domain, secure);
}

export default {
setCookie,
getCookie,
delCookie
}
