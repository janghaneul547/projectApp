/*main*/
$(".menu>li").hover(function(){
	$(this).children(".sub_menu").stop().slideDown(400);
},function(){
	$(this).children(".sub_menu").stop().slideUp(200);
});

$("#menu_btn").click(function(){
	$(".menu").fadeToggle(200);
	$(this).toggleClass("menuAni");
});

/*mainbanner*/
var slideIndex=0;
function slideFunc(){
	$("#main_banner>div").removeClass("top");
	slideIndex++;
	
	var liIndex = slideIndex % 3;
	if(liIndex == 0){
		$("#main_banner>div").eq(liIndex).addClass("top");
	}else if(liIndex == 1){
		$("#main_banner>div").eq(liIndex).addClass("top");
	}else if(liIndex == 2){
		$("#main_banner>div").eq(liIndex).addClass("top");
	}
}
var slideAuto = setInterval("slideFunc()",2000);
$(".slideWrap").hover(function(){
	clearInterval(slideAuto)
},function(){
	slideAuto = setInterval("slideFunc()",2000);
});

/*new Book*/
function nextFun(){
	$(".slideWrap>div").append($("div.NB_item").first().clone());
	$("div.NB_item").first().remove();
}
function prevFun(){
	$(".slideWrap>div").prepend($("div.NB_item").last().clone());
	$("div.NB_item").last().remove();
}