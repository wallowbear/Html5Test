$(function(){
	for(var i=0;i<100;i++){
		console.log(i);
		$(".iosContainer ul").append("<li>"+i+"</li>").css("background-color", "red");
	}
	
	$("document").mousedown(function(e) {
        e.preventDefault();
    });
	
	var UL=$(".iosContainer");
	UL.css("margin-top",500);
	
	//alert();
	//UL.children().mousemove(function(e){e.preventDefault();});
	UL.mousemove(function(e2){	  
		
		var UL2=UL.find("ul");
		
		UL2.css("top",-(e2.clientY-parseInt(UL.css("margin-top")))/600*(UL2.height()-600));
		console.log("enter move",e2.offsetY);	
	})
	
	//UL.on("mouseleave",function(){console.log("mouseleave")});
})