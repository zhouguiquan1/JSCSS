
function showLocale()
{
	var objD = new Date();
	var str,colorhead,colorfoot;
	var yy = objD.getYear();
	if(yy<1900) yy = yy+1900;
	var MM = objD.getMonth()+1;
	if(MM<10) MM = '0' + MM;
	var dd = objD.getDate();
	if(dd<10) dd = '0' + dd;
	var hh = objD.getHours();
	if(hh<10) hh = '0' + hh;
	var mm = objD.getMinutes();
	if(mm<10) mm = '0' + mm;
	var ss = objD.getSeconds();
	if(ss<10) ss = '0' + ss;
	var ww = objD.getDay();
	if  ( ww==0 )  colorhead="<font color=\"#FF0000\">";
	if  ( ww > 0 && ww < 6 )  colorhead="<font color=\"#373737\">";
	if  ( ww==6 )  colorhead="<font color=\"#008000\">";
	if  (ww==0)  ww="星期日";
	if  (ww==1)  ww="星期一";
	if  (ww==2)  ww="星期二";
	if  (ww==3)  ww="星期三";
	if  (ww==4)  ww="星期四";
	if  (ww==5)  ww="星期五";
	if  (ww==6)  ww="星期六";
	colorfoot="</font>"
	str = "今天是："+ yy + "年" + MM + "月" + dd + "日  "  +ww ;
	document.write(str);
}
function RemLastChar(Str,char)
{
	var lastindex = Str.lastIndexOf(char);
    if(lastindex>-1){Str = Str.substring(0,lastindex)};
	return Str;
}
function selectlink(o){
	var linkurl = o.options[o.selectedIndex].value;
	if(linkurl !="")
		window.open(linkurl);
}
function GetRequest() {
   var url = location.search;
   var theRequest = new Object();
   if (url.indexOf("?") != -1) {
      var str = url.substr(1);
      strs = str.split("&");
      for(var i = 0; i < strs.length; i ++) {
         theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
      }
   }
   return theRequest;
}
function getAjax(){	
 	var ajaxRequest=null;
	//IE
	if(window.ActiveXObject){
		try{
			ajaxRequest=new ActiveXObject("Msxml2.XMLHttp");
		}catch(e){
			ajaxRequest=new ActiveXObject("microsoft.XMLHttp");
		}
	}
	//firfox等浏览器
	if(ajaxRequest==null && window.XMLHttpRequest){
		ajaxRequest=new XMLHttpRequest();
	}
	if(ajaxRequest==null){
		alert("创建失败！");
	}
	return ajaxRequest;
}
function VideoPlay(flv,w,h){
    var so = new SWFObject("js/CuPlayer.swf","CuPlayer",w,h,"9","#FFF");
    so.addParam("allowfullscreen","true");
    so.addParam("allowscriptaccess","always");
    so.addParam("wmode","opaque");
    so.addParam("quality","high");
    so.addParam("salign","lt");
    so.addVariable("CuPlayerFile",flv);
    so.addVariable("CuPlayerLogo","");
    so.addVariable("CuPlayerImage","");
    so.addVariable("CuPlayerShowImage","true");
    so.addVariable("CuPlayerWidth",w);
    so.addVariable("CuPlayerHeight",h);
    so.addVariable("CuPlayerAutoPlay","true");
    so.addVariable("CuPlayerAutoRepeat","true");
    so.addVariable("CuPlayerShowControl","true");
    so.addVariable("CuPlayerAutoHideControl","false");
    so.addVariable("CuPlayerAutoHideTime","6");
    so.addVariable("CuPlayerVolume","80");
    so.addVariable("CuPlayerGetNext","false");
    so.write("CuPlayer");
}
function Substrs(str,n){
    return str.length > n?(str.substr(0,n)+"..."):str;
}
function DateFormat(t,a){
    var rtn;
    if(a == 0){//2015-03-26
        rtn = t.substr(0,4) + "-" + t.substr(5,2) + "-" + t.substr(8,2);
    }else if(a == 1){//03-26
        rtn = t.substr(5,2) + "-" + t.substr(8,2);
    }
    return rtn;
}
function getjson(a,c,p,n,km,fun){
    $.ajax({
      url: '/api/JyzyAjax.aspx',
      type: 'POST',
      dataType: 'json',
      data: {action: a,cid:c,km:km,pn:p,n:n}
    })
    .done(function() {
      //console.log("success");
    })
    .fail(function() {
      //console.log("error");
    })
    .always(function(o) {
      fun(o,p);
      //console.log("complete");
    }); 
}
function flashChecker(){
  var hasFlash=0;         
  var flashVersion=0; 
  var isIE=/*@cc_on!@*/0;  
  if(isIE)
  {
      var swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash'); 
      if(swf) {
          hasFlash=1;
          VSwf=swf.GetVariable("$version");
          flashVersion=parseInt(VSwf.split(" ")[1].split(",")[0]); 
      }
  }else{
      if (navigator.plugins && navigator.plugins.length > 0)
      {
         var swf=navigator.plugins["Shockwave Flash"];
         if (swf)
         {
            hasFlash=1;
            var words = swf.description.split(" ");
            for (var i = 0; i < words.length; ++i)
            {
                if (isNaN(parseInt(words[i]))) continue;
                flashVersion = parseInt(words[i]);
            }
        }
     }
  }
  return {f:hasFlash,v:flashVersion};
}
function VideoPlay(flv,w,h){
    if(isFlash.f){
        var so = new SWFObject("js/CuPlayer.swf","CuPlayer",w,h,"9","#000000");
        so.addParam("allowfullscreen","true");
        so.addParam("allowscriptaccess","always");
        so.addParam("wmode","opaque");
        so.addParam("quality","high");
        so.addParam("salign","lt");
        so.addVariable("CuPlayerFile",flv);
        so.addVariable("CuPlayerLogo","");
        so.addVariable("CuPlayerImage","");
        so.addVariable("CuPlayerShowImage","true");
        so.addVariable("CuPlayerWidth",w);
        so.addVariable("CuPlayerHeight",h);
        so.addVariable("CuPlayerAutoPlay","true");
        so.addVariable("CuPlayerAutoRepeat","true");
        so.addVariable("CuPlayerShowControl","true");
        so.addVariable("CuPlayerAutoHideControl","false");
        so.addVariable("CuPlayerAutoHideTime","6");
        so.addVariable("CuPlayerVolume","80");
        so.addVariable("CuPlayerGetNext","false");
        so.write("CuPlayer");
    }else{
        $("#CuPlayer").html("<p align='center'><br />您没有安装Flash Player.导致视频暂时无法!</p>")  
    }
}
function Flash(url,w,h){
    var FlashData ;
    FlashData = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+w+'" height="'+h+'"> ';
    FlashData +='<param name="movie" value="' + url + '">';
    FlashData +='<param name="quality" value="high"> ';
    FlashData +='<param name="wmode" value="transparent"> ';
    FlashData +='<param name="menu" value="false"> ';
    FlashData +='<embed src="' + url + '" quality="high" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+w+'" height="'+h+'" wmode="transparent"></embed> ';
    FlashData +='</object> ';
    document.write(FlashData);  
}
var isFlash = flashChecker();