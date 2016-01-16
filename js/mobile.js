// JavaScript Document
$(function(){
	init();
	
	})

function init(){
    var e=$.Event("initEvt");
	$("body").trigger(e);
	$("body").bind("click",function(){
		$("body").trigger(e);
		})
	$("body").bind("initEvt",function(){alert("evt e!!!");})
	
	
	}	
	