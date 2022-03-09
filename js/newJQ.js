$(function () {

	/*$("p").click(function(){
		$("p").hide();
	})*/
	//$("p").hide();

   /*$("p").dblclick(function(){
		$("p").hide();
	})*/
	/*$("p").mouseenter(function(){
		$("p").hide();
	})*/
	/*$("p").mouseleave(function(){
		$("p").hide();
	})*/
	/*$("p").mousedown(function(){
		$("p").hide();
	})*/
	/*$("p").mouseup(function(){
		$("p").hide();
	})*/
	/*$("p").hover(function(){
		alert('Hi')

	},function(){
		alert('By-By')
	})*/
	$("p").hover(function(){
		$("p").css('color','red');
//$("p").text('Hi')
	},function(){

	$("p").css('color','black');
	
	}) 
	$("a").hover(function(){
		$("a").css('color','red');
	},function(){

	$("a").css('color','black');
	
	}) 
});