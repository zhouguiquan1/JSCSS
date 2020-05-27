 // JavaScript Document
var pglbox1i = 0;
var pglbox1Time= 6000 ;
var pglbox1Timer;
var pglbox1Total;
$(function(){
	pglbox1Total = $(".pglbox1 .pic li").length;
	$(".pglbox1 .pic li").each(function(i) {
        $(".pglbox1 .btn").append("<li></li>");
    });
	$(".pglbox1 .btn li:first").addClass('s');
	$(".pglbox1 .btn li").hover(function(){
		if(pglbox1i!=$(this).index())
			pglbox1liShow($(this).index());
	},function(){
		return ;
	})
	pglbox1liShow(pglbox1i);
	pglbox1Timer = setTimeout(pglbox1liAuto,pglbox1Time)
	
});
function pglbox1liAuto(){
	var TemID1 = pglbox1i+1;
	TemID1 = TemID1>=(pglbox1Total)?0:TemID1;	
	pglbox1liShow(TemID1);	
	pglbox1Timer = setTimeout(pglbox1liAuto,pglbox1Time);
}
function pglbox1liShow(TemID1){
	clearTimeout(pglbox1Timer);
	pglbox1Timer = setTimeout(pglbox1liAuto,pglbox1Time);
	$(".pglbox1 .pic li").eq(pglbox1i).css("z-index",2);
	$(".pglbox1 .xw li").eq(pglbox1i).css("z-index",2);
	
	pglbox1i = TemID1;
	$(".pglbox1 .pic li").stop();
	$(".pglbox1 .pic li").eq(pglbox1i).css("z-index",3);
	$(".pglbox1 .pic li").eq(pglbox1i).css("opacity",0);
	$(".pglbox1 .xw li").eq(pglbox1i).css("z-index",3);
	$(".pglbox1 .xw li").eq(pglbox1i).css("opacity",0);	
	$(".pglbox1 .btn li").removeClass('s');
	$(".pglbox1 .btn li").eq(pglbox1i).addClass('s');
	$(".pglbox1 .pic li").eq(pglbox1i).animate({opacity: 1}, 800,function(){
		$(".pglbox1 .pic li").each(function(i) {	
			  if( i != pglbox1i){
				  $(".pglbox1 .pic li").eq(i).css("z-index",1);
				  $(".pglbox1 .pic li").eq(i).css("opacity",0);	
			  }
		  });		
	});	
	$(".pglbox1 .xw li").eq(pglbox1i).animate({opacity: 1}, 800,function(){
		  $(".pglbox1 .xw li").each(function(i) {	
			  if( i != pglbox1i){
				  $(".pglbox1 .xw li").eq(i).css("z-index",1);
				  $(".pglbox1 .xw li").eq(i).css("opacity",0);
				  $(".pglbox1 .xw li").eq(i).css("display","none");	
			  }
			  else{
				  $(".pglbox1 .xw li").eq(i).css("display","block");  
				}
		  });		
	});
}

$(".pglbox1 .xw li:first").css("display","block")