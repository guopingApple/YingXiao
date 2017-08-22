
	//此处引用：鼠标滚轮mousewheel插件
	!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof exports?module.exports=a:a(jQuery)}(function(a){function b(b){var g=b||window.event,h=i.call(arguments,1),j=0,l=0,m=0,n=0,o=0,p=0;if(b=a.event.fix(g),b.type="mousewheel","detail"in g&&(m=-1*g.detail),"wheelDelta"in g&&(m=g.wheelDelta),"wheelDeltaY"in g&&(m=g.wheelDeltaY),"wheelDeltaX"in g&&(l=-1*g.wheelDeltaX),"axis"in g&&g.axis===g.HORIZONTAL_AXIS&&(l=-1*m,m=0),j=0===m?l:m,"deltaY"in g&&(m=-1*g.deltaY,j=m),"deltaX"in g&&(l=g.deltaX,0===m&&(j=-1*l)),0!==m||0!==l){if(1===g.deltaMode){var q=a.data(this,"mousewheel-line-height");j*=q,m*=q,l*=q}else if(2===g.deltaMode){var r=a.data(this,"mousewheel-page-height");j*=r,m*=r,l*=r}if(n=Math.max(Math.abs(m),Math.abs(l)),(!f||f>n)&&(f=n,d(g,n)&&(f/=40)),d(g,n)&&(j/=40,l/=40,m/=40),j=Math[j>=1?"floor":"ceil"](j/f),l=Math[l>=1?"floor":"ceil"](l/f),m=Math[m>=1?"floor":"ceil"](m/f),k.settings.normalizeOffset&&this.getBoundingClientRect){var s=this.getBoundingClientRect();o=b.clientX-s.left,p=b.clientY-s.top}return b.deltaX=l,b.deltaY=m,b.deltaFactor=f,b.offsetX=o,b.offsetY=p,b.deltaMode=0,h.unshift(b,j,l,m),e&&clearTimeout(e),e=setTimeout(c,200),(a.event.dispatch||a.event.handle).apply(this,h)}}function c(){f=null}function d(a,b){return k.settings.adjustOldDeltas&&"mousewheel"===a.type&&b%120===0}var e,f,g=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],h="onwheel"in document||document.documentMode>=9?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],i=Array.prototype.slice;if(a.event.fixHooks)for(var j=g.length;j;)a.event.fixHooks[g[--j]]=a.event.mouseHooks;var k=a.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var c=h.length;c;)this.addEventListener(h[--c],b,!1);else this.onmousewheel=b;a.data(this,"mousewheel-line-height",k.getLineHeight(this)),a.data(this,"mousewheel-page-height",k.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var c=h.length;c;)this.removeEventListener(h[--c],b,!1);else this.onmousewheel=null;a.removeData(this,"mousewheel-line-height"),a.removeData(this,"mousewheel-page-height")},getLineHeight:function(b){var c=a(b),d=c["offsetParent"in a.fn?"offsetParent":"parent"]();return d.length||(d=a("body")),parseInt(d.css("fontSize"),10)||parseInt(c.css("fontSize"),10)||16},getPageHeight:function(b){return a(b).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})});
	
	var witem = 0,hitem = 0;
	var sitem = 0,sitemh = 0;
	var left2 = 0,t2 = 0;
	var speed2 = 1500,timerCircle=0;
	var wh = $(window).height();

	var i=0;
	var $btn,
		$wrap,
		$arrow;
	var body,nav;
	
	$(function(){
		$btn = $('.nav-wrap ul li'),
			$wrap = $('.section-wrap'),
			$arrow = $('.arrow');
		
		/*当前页面赋值*/
		function up(){i++;if(i==7){i=6};}
		function down(){i--;if(i<0){i=0};}
		
		// back to home
		$('.sideR .icon4').click(function() {
			i = 0;
			run();
		});
		//sideR
		$('.sideR ul li:first-child').click(function() {
			i = 5;
			run();
		});
		//left menu
		body = $("body"),nav=$("#nav");
		$("#open-menu").on("mouseenter", function() {
			$("#menu-button").addClass("menu-hovered");
		}).on("mouseleave", function() {
				$("#menu-button").removeClass("menu-hovered");
		}).on("click",function() {
			body.toggleClass("opened-menu");
			if (body.hasClass("opened-menu")) {
				nav.removeClass('fadeOutLeftCom animated').addClass('fadeInLeftCom animated');
				$('.menu-button .line').css({'background-color':'#171616'});
			} else{
				nav.removeClass('fadeInLeftCom animated').addClass('fadeOutLeftCom animated');
				
				if(i==1 || i==3 || i==5){
					$('.menu-button .line').css({'background-color':'#77a4f8'});
				}else{
					$('.menu-button .line').css({'background-color':'#fff'});
				}
			}
		});
		/*右侧按钮点击*/
		$btn.each(function(index) {
			$(this).click(function(){
				i = index;
				run();
			})
		});
		
		/*翻页按钮点击*/
		$arrow.one('click',go);
		function go(){
			up();run();	
			setTimeout(function(){$arrow.one('click',go)},1000)
		};
		
		/*响应鼠标*/
		$wrap.one('mousewheel',mouse_);
		function mouse_(event){
			if(event.deltaY<0) {up()}
			else{down()}
			run();
			setTimeout(function(){$wrap.one('mousewheel',mouse_)},1000)
		};
		
		/*响应键盘上下键*/
		$(document).one('keydown',k);
		function k(event){
			var e=event||window.event;
			var key=e.keyCode||e.which||e.charCode;
			switch(key)	{
				case 38: down();run();	
				break;
				case 40: up();run();	
				break;
			};
			setTimeout(function(){$(document).one('keydown',k)},1000);
		}
		
		
		 // sevice
		 if($(window).width() <= 1366 ){
			$('.tit_03').height(100);
			$('.seviceCon').height(wh-100);
		}else{
			$('.seviceCon').height(wh-135);
		}
		 witem = $('.seviceCon .item').width() + 1;
		 hitem = $('.seviceCon .item').height() + 1;
		 sitem = witem * 2;
		 sitemh = hitem * 2;
		
	});
	//service
	function go2(){
		var $div = $('.div_play');
		if( t2 == 0 && left2 < sitem){
			left2 += witem;
			$div.animate({'left': left2 + 'px'},speed2);
		} else if (left2 == sitem && t2 < sitemh) {
			t2 += hitem;
			$div.animate({'top': t2 + 'px'},speed2);
		} else if( t2 == sitemh && left2 > 0 ){
			left2 -= witem;
			$div.animate({'left': left2 + 'px'},speed2);
		} else if(left2 == 0 && t2 <= sitemh){
			t2 -= hitem;
			$div.animate({'top': t2 + 'px'},speed2);
		}
	}
	
	/*页面滑动*/
	function run(){
		$btn.eq(i).addClass('on').siblings().removeClass('on');	
		$wrap.attr("class","section-wrap").addClass(function() { 
			return "put-section-"+i;
		});
		if(i==4){
			timerCircle = setInterval("go2()",1000);
		} else {
			clearInterval(timerCircle);
		}
		if(i==1 || i==3 || i==5){
			if (body.hasClass("opened-menu")) {
				$('.menu-button .line').css({'background-color':'#171616'});
			} else{
				$('.menu-button .line').css({'background-color':'#77a4f8'});
			}
		}else{
			if (body.hasClass("opened-menu")) {
				$('.menu-button .line').css({'background-color':'#171616'});
			} else{
				$('.menu-button .line').css({'background-color':'#fff'});
			}
		}
	};
		
