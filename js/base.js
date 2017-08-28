/**
*根据id获取元素对象
*/
function $(id){
	return document.getElementById(id);	
}
/**
*可视区高度
*/
function clientH(){
	return document.documentElement.clientHeight;	
}
/**
*可视区宽度
*/
function clientW(){
	return document.documentElement.clientWidth;	
}
/**
*纵向滚动条距离
*/
function scrollH(){
	return document.documentElement.scrollTop || document.body.scrollTop;	
}
/**
*横向滚动条距离
*/
function scrollW(){
	return document.documentElement.scrollLeft || document.body.scrollLeft;	
}
/**
*
*相对位置Top
*
*/
function posTop(obj){
	var iTop = 0;
	while(obj){
		iTop += obj.offsetTop;
		obj = obj.offsetParent;	
	};	
	return iTop;
}
/**
*
*相对位置Left
*
*/
function posLeft(obj){
	var iLeft = 0;
	while(obj){
		iLeft += obj.offsetLeft;
		obj = obj.offsetParent;	
	};	
	return iLeft;
}

/**
*
*获取样式
*
*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}
	return getComputedStyle(obj,false)[attr];
}
/**
* 提取oParent下class为strClass的obj元素
*/
function getByClass(oParent,sClass,sTag){
	var reg = null;
	var str = '';
	if(typeof arguments[1] == 'string'){
		reg = new RegExp('(^|\\s)' + sClass + '(\\s|$)');
	}else if(typeof arguments[1] == 'object'){
		for(var i = 0; i < sClass.length; i++){
			if(i != sClass.length - 1){
				str += sClass[i] + '|';
			}else{
				str += sClass[i];	
			}
		}
		reg = new RegExp('(^|\\s)(' + str + ')(\\s|$)');
	}
	
	var rtnElem = [];
	var arr = [];
	if(!sTag){
		arr = oParent.getElementsByTagName('*');
	}else{
		arr = oParent.getElementsByTagName(sTag);	
	}
	for(var i = 0,len = arr.length; i < len; i++){
		if(reg.test(arr[i].className)){
			rtnElem.push(arr[i]);
		}
	}
	return rtnElem
}

/**
* 运动到特定位置，速度版
*/
function startMove(obj,json,fn){
	clearInterval(obj.time);
	obj.time = setInterval(function(){
		var bStop = true;
		var iCur = 0;
		var iSpeed = 0;
		for(var attr in json){
			if(attr == 'opacity'){
				if(Math.round(Math.parseFloat(getStyle(obj,attr) * 100)) == 0){
					iCur = Math.round(Math.parseFloat(getStyle(obj,attr) * 100));
				}else{
					iCur = Math.round(Math.parseFloat(getStyle(obj,attr) * 100)) || 100;	
				}
			}else{
				iCur = parseInt(getStyle(obj,attr)) || 0;	
			}
			if(iCur != json[attr]){
				bStop = false;
			}
			iSpeed = (json[attr] - iCur) / 8;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity=' + (iCur + iSpeed) + ')';
				obj.style.opacity = (iCur + iSpeed) / 100;
			}else{
				obj.style[attr] = (iCur + iSpeed) + 'px';	
			}
		}
		if(bStop){
			clearInterval(obj.time);
			fn && fn();
		}	
	},32);
}

var Tween = {
		linear: function (t, b, c, d){  //匀速
			return c*t/d + b;
		},
		easeIn: function(t, b, c, d){  //慢到快
			return c*(t/=d)*t + b;
		},
		easeOut: function(t, b, c, d){  //快到慢
			return -c *(t/=d)*(t-2) + b;
		},
		easeBoth: function(t, b, c, d){  //慢快慢
			if ((t/=d/2) < 1) {
				return c/2*t*t + b;
			}
			return -c/2 * ((--t)*(t-2) - 1) + b;
		},
		easeInStrong: function(t, b, c, d){
			return c*(t/=d)*t*t*t + b;
		},
		easeOutStrong: function(t, b, c, d){
			return -c * ((t=t/d-1)*t*t*t - 1) + b;
		},
		easeBothStrong: function(t, b, c, d){
			if ((t/=d/2) < 1) {
				return c/2*t*t*t*t + b;
			}
			return -c/2 * ((t-=2)*t*t*t - 2) + b;
		},
		elasticIn: function(t, b, c, d, a, p){
			if (t === 0) { 
				return b; 
			}
			if ( (t /= d) == 1 ) {
				return b+c; 
			}
			if (!p) {
				p=d*0.3; 
			}
			if (!a || a < Math.abs(c)) {
				a = c; 
				var s = p/4;
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		},
		elasticOut: function(t, b, c, d, a, p){
			if (t === 0) {
				return b;
			}
			if ( (t /= d) == 1 ) {
				return b+c;
			}
			if (!p) {
				p=d*0.3;
			}
			if (!a || a < Math.abs(c)) {
				a = c;
				var s = p / 4;
			} else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
		},    
		elasticBoth: function(t, b, c, d, a, p){
			if (t === 0) {
				return b;
			}
			if ( (t /= d/2) == 2 ) {
				return b+c;
			}
			if (!p) {
				p = d*(0.3*1.5);
			}
			if ( !a || a < Math.abs(c) ) {
				a = c; 
				var s = p/4;
			}
			else {
				var s = p/(2*Math.PI) * Math.asin (c/a);
			}
			if (t < 1) {
				return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
						Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
			}
			return a*Math.pow(2,-10*(t-=1)) * 
					Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
		},
		backIn: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
			   s = 1.70158;
			}
			return c*(t/=d)*t*((s+1)*t - s) + b;
		},
		backOut: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
				s = 3.70158;  //回缩的距离
			}
			return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
		}, 
		backBoth: function(t, b, c, d, s){
			if (typeof s == 'undefined') {
				s = 1.70158; 
			}
			if ((t /= d/2 ) < 1) {
				return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
			}
			return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
		},
		bounceIn: function(t, b, c, d){
			return c - Tween['bounceOut'](d-t, 0, c, d) + b;
		},       
		bounceOut: function(t, b, c, d){
			if ((t/=d) < (1/2.75)) {
				return c*(7.5625*t*t) + b;
			} else if (t < (2/2.75)) {
				return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
			} else if (t < (2.5/2.75)) {
				return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
			}
			return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
		},      
		bounceBoth: function(t, b, c, d){
			if (t < d/2) {
				return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
			}
			return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
		}
	}
/**
* 同时间运动
*/
function startMoveTime(obj,json,times,fx,fn){
	
	var iCur = {};
	
	if( typeof times == 'undefined' ){
		times = 400;
		fx = 'linear';
	}
	
	if( typeof times == 'string' ){
		if(typeof fx == 'function'){
			fn = fx;
		}
		fx = times;
		times = 400;
	}
	else if(typeof times == 'function'){
		fn = times;
		times = 400;
		fx = 'linear';
	}
	else if(typeof times == 'number'){
		if(typeof fx == 'function'){
			fn = fx;
			fx = 'linear';
		}
		else if(typeof fx == 'undefined'){
			fx = 'linear';
		}
	}
	
	var startTime = nowTime();
	
	for(var attr in json){
		iCur[attr] = 0;
		
		if(attr == 'opacity'){
			iCur[attr] = Math.round(getStyle(obj,attr)*100);
		}
		else{
			iCur[attr] = parseInt(getStyle(obj,attr));
		}
		
	}
	
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		
		var changeTime = nowTime();
		
		var scale = 1 - Math.max(0,startTime + times - changeTime)/times;   
		// scale : 2000 - 0  : 1 - 0 : 0 - 1
		
		for(var attr in json){
			
			var value = Tween[fx](scale*times,iCur[attr],json[attr] - iCur[attr],times);
			
			if(attr == 'opacity'){
				obj.style.filter = 'alpha(opacity='+ value +')';
				obj.style.opacity = value/100;
			}
			else{
				obj.style[attr] = value + 'px';
			}
			
		}
		
		if(scale == 1){
			clearInterval(obj.timer);
			if(fn){
				fn();
			}
		}
		
		
	},13);
	
	function nowTime(){
		return (new Date()).getTime();
	}
	
}
/**
* 给元素添加class;
*/
function addClass(obj,sClass){
	
	var aClass = obj.className.split(' ');
	
	if(!obj.className){
		obj.className = sClass;
		return;
	}
	
	for(var i=0; i<aClass.length; i++){
	
		if(aClass[i] === sClass)return;
		
	}

	obj.className += ' ' + sClass;	
	
}
/**
* 给元素删除class;
*/
function removeClass(obj,sClass){
	
	var aClass = obj.className.split(' ');
	
	if(!aClass[0])return;
	
	for(var i=0; i<aClass.length; i++){
	
		if(aClass[i] === sClass){
		
			aClass.splice(i,1);
			obj.className = aClass.join(' ');
			return;
			
		}	
		
	}
	
}
/**
* 预加载;
*/
 function imgLoad(url, callback) {
	   var img = new Image();
	   img.src = url;
	   if (img.complete) {
			callback(img.width, img.height);
	   } else {
			img.onload = function () {
				 callback(img.width, img.height);
				 img.onload = null;
			};
	   };
  };