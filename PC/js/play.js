// auto play
var firstIndex=-1;
var timerIndex=0;
$(document).ready(function () {
//  move();
//  timerIndex = setInterval("move()",10000);
    $('.pageCircle li').on('click',function(){
//  	clearInterval(timerIndex);
        var ddIndex = $(this).index()-1;
        firstIndex = ddIndex;
        move();
//      timerIndex = setInterval("move()",10000);
    });
})
function move(){
    firstIndex++;
    if(firstIndex>=3){
        firstIndex=0;
    }
    if(firstIndex<3){
		$('.pageCircle li').removeClass('curr');
		$('.pageCircle li').eq(firstIndex).addClass('curr');
		$('.pageContent').removeClass('d_block addAnimation').addClass('d_none');
		$('.pageContent').eq(firstIndex).removeClass('d_none').addClass('d_block addAnimation');
    }
}