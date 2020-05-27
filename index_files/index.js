//indexbox1
var ztzlpagenum = 2;
var ztzltotal = $("#ibox1 .ibox1list ul li").length;
var ztzlpage,ztzlpagetotal;
ztzlpage = 0;
ztzlpagetotal = Math.ceil($("#ibox1 .ibox1list ul li").length / ztzlpagenum);

$("#ibox1 .ibox1list ul").width(1100*ztzlpagetotal);
$("#ibox1 .prev").click(function() {
	if(ztzlpage > 0){
		ztzlpage--;
		$("#ibox1 .ibox1list ul").animate({left: -ztzlpage*1140},500);
	}
});
$("#ibox1 .next").click(function() {
	if(ztzlpage < (ztzlpagetotal-1)){
		ztzlpage ++;
		$("#ibox1 .ibox1list ul").animate({left: -ztzlpage*1140},500);
	}
		
});


//学院新闻、校园动态
$(".ibox2tit1 dt:first").css("padding-left","0");
$(".ibox2tit1 dt:first").css("background","none");
$('.ibox2tit1 dt:first').addClass('s');
$(".ibox2tit1 dt").hover(function(){
	$(".ibox2tit1 dt").removeClass("s");
	$(this).addClass("s");
	$(".ibox2tit1 dd a").hide();
	$(".ibox2tit1 dd a").eq($(this).index()).show();
	$(".ibox2lcont").hide();
	$(".ibox2lcont").eq($(this).index()).show();
	},function(){
		return;
	})
$(".ibox2tit1 dd a").first().css("display","block");
$(".ibox2lcont").first().css("display","block");

$(document).ready(function() {
$(".ibox2lcont .list li div img").each(function(){
    if($(this).attr("src").length==0)
    {
	$(this).parents(".ibox2lcont .list li div").remove();
        
	}
else{
$(this).parents(".ibox2lcont .list li").children(".ibox2lcont .list li a").css("width","370px")
}
});
});

//媒体关注、温科视频、通知公告
$(".ibox2tit2 dt:first").css("padding-left","0");
$(".ibox2tit2 dt:first").css("background","none");
$('.ibox2tit2 dt:first').addClass('s');
$(".ibox2tit2 dt").hover(function(){
	$(".ibox2tit2 dt").removeClass("s");
	$(this).addClass("s");
	$(".ibox2tit2 dd a").hide();
	$(".ibox2tit2 dd a").eq($(this).index()).show();
	$(".ibox2rcont").hide();
	$(".ibox2rcont").eq($(this).index()).show();
	},function(){
		return;
	})
$(".ibox2tit2 dd a").first().css("display","block");
$(".ibox2rcont").first().css("display","block");


//网站导航
$('.linkmenu li:first').addClass('s');
$(".linkmenu li").click(function(){
	$(".linkmenu li").removeClass("s");
	$(this).addClass("s");
	$(".linklist").hide();
	$(".linklist").eq($(this).index()).show();
	})
$(".linklist").first().css("display","block");


$(document).ready(function() {
$(".ibox2lcont .tit h1 div img").each(function(){
    if($(this).attr("src").length==0)
    {
	$(this).parents(".ibox2lcont .tit h1 div").remove();
        
	}
else{
$(".ibox2lcont .tit h1 a").css("width","452px")
}
});
});











