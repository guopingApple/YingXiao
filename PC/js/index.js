
var j = 0,timer = 0,len = 0;

$(function() {
	//homepage height
	var wh = $(window).height();
	$('.homePage, .wedo, .advantage,.partnerApply,.hot,.sevice,.aboutus').height(wh).css('overflow','hidden');
	// second 
	$('.panel').height(wh - 140);
	$('.second').find('.box').hover(function(){
		var _this = $(this);
		_this.siblings('.box').stop().animate({'width':'15%','padding':'0'},500);
		_this.stop().animate({'width':'52%','padding':'2.5%'},500);
		_this.find('.initialPic').stop().fadeOut(200);
		_this.find('.content').addClass('active');
	},function(){
		var _this = $(this);
		$('.second').find('.box').stop().animate({'width':'25%','padding':'0'},500);
		_this.find('.content').removeClass('active');
		_this.find('.initialPic').stop().fadeIn(200);
	});
	//hot product layer
	var len_li = $('.products ul li').length;
	$('.products ul').width( 285 * len_li );
	var left = 0,i = 1, width = 1140,width_ul = $('.products ul').width();
	var page = parseInt( len_li / 4 ) + 1;
	if (parseInt(len_li % 4) == 0) {
		page = parseInt( len_li / 4 );
	}
	// right arrow
	$('.hot_layer_b a.rar').on('click',function(){
		if (i < page) {
			left -= width;
			$('.products ul').animate({'left': left},500);
			i++;
		}
	});
	// left arrow
	$('.hot_layer_b a.lar').on('click',function(){
		if (i <= page && i > 1) {
			left += width;
			$('.products ul').animate({'left': left},500);
			i--;
		}
	});
	// show
	$('.hot_product_txt_6,.hot_product_txt_13').on('click',function(){
		$('.hot_product_layer').show();		
	});
	// close
	$('.hot_layer_close').on('click',function(){
		$(this).parents('.hot_product_layer').hide();
	});
	// img hover
	$('.products ul li').hover(function(){
		$(this).removeClass('leave').addClass('hover');
	},function(){
		$(this).removeClass('hover').addClass('leave');
	});
	// radio
	$('.iwant').each(function(i){
		var _this = $(this);	
		_this.on('click',function(){
			$('.iwant').find('em').css('display','none');	
			_this.find('em').css('display','block');
		});
	});
	$('.gender').each(function(i){
		var _this = $(this);	
		_this.on('click',function(){
			$('.gender').find('em').css('display','none');	
			_this.find('em').css('display','block');
		});
	});
	// tel hover
//	$('.sideR ul li.icon2 a').hover(function(){
//		$(this).next('span').animate({'opacity':'1'},500);
//	},function(){
//		$(this).next('span').animate({'opacity':'0'},500);
//	});
	//device 
	$(window).load(function(){
		if($(window).width() <= 1366 ){
			$('.tit_01').height(80);
			$('.panel').height(wh - 80);
			$('.apply form table tr:first-child').find('td').height(80);
		};
		 
	});
	// hot product wave 
	$('.hot_product').height(wh-122);
	function initAll(){function SiriWave(opt){this.opt=opt||{};this.K=1;this.F=15;this.speed=this.opt.speed||0.1;this.noise=this.opt.noise||30;this.phase=this.opt.phase||0;if(!window.devicePixelRatio){devicePixelRatio=1}this.width=devicePixelRatio*(this.opt.width||320);this.height=devicePixelRatio*(this.opt.height||100);this.MAX=(this.height/2)-4;this.canvas=$("#wave")[0];this.canvas.width=this.width;this.canvas.height=this.height;this.canvas.style.width=(this.width/devicePixelRatio)+"px";this.canvas.style.height=(this.height/devicePixelRatio)+"px";this.ctx=this.canvas.getContext("2d");this.run=false}SiriWave.prototype={_globalAttenuationFn:function(x){return Math.pow(this.K*4/(this.K*4+Math.pow(x,4)),this.K*2)},_drawLine:function(attenuation,color,width,noise,F){this.ctx.moveTo(0,0);this.ctx.beginPath();this.ctx.strokeStyle=color;this.ctx.lineWidth=width||1;var x,y;F=F||this.F;noise=noise*this.MAX||this.noise;for(var i=-this.K;i<=this.K;i+=0.01){i=parseFloat(parseFloat(i).toFixed(2));x=this.width*((i+this.K)/(this.K*2));y=this.height/2+noise*Math.pow(Math.sin(i*10*attenuation),1)*Math.sin(F*i-this.phase);this.ctx.lineTo(x,y)}this.ctx.lineTo(this.width,this.height);this.ctx.lineTo(0,this.height);this.ctx.fillStyle=color;this.ctx.fill()},_clear:function(){this.ctx.globalCompositeOperation="destination-out";this.ctx.fillRect(0,0,this.width,this.height);this.ctx.globalCompositeOperation="source-over"},_draw:function(){if(!this.run){return}this.phase=(this.phase+this.speed)%(Math.PI*64);this._clear();this._drawLine(0.8,"rgba(178,243,253,0.5)",1,0.75,8);this._drawLine(0.5,"rgba(178,243,253,0.5)",1,0.55,7);this._drawLine(1,"rgba(56,211,234,0.5)",1,0.25,6);clearAnimationFrame=requestAnimationFrame(this._draw.bind(this),1000)},start:function(){this.phase=0;this.run=true;this._draw()},stop:function(){this.run=false;this._clear()},setNoise:function(v){this.noise=Math.min(v,1)*this.MAX},setSpeed:function(v){this.speed=v},set:function(noise,speed){this.setNoise(noise);this.setSpeed(speed)},bl:function(val){return 1920/15}};var SW=new SiriWave({width:$(window).width(),height:200,container:$(".wavewarp")[1]});SW.setSpeed(0.025);SW.start()}initAll();$(window).resize(function(){initAll()});
	
});
