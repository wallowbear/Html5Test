$(function(){
	for(var i=0;i<100;i++){
		console.log(i);
		$(".iosContainer ul").append("<li>"+i+"</li>").css("background-color", "red");
	}
	
	$("document").mousedown(function(e) {
        e.preventDefault();
    });
	
	var UL=$(".iosContainer");
	
	UL.mouseenter(function(e) {
        console.log("enter");
		
		/*	
		UL.mouseleave(function(e3) {
           //UL.mouseenter();
		   console.log("leave")
		   UL.mousemove();
		   UL.mouseleave();
			
        });		*/	
		
    });
	
	//UL.children().mousemove(function(e){e.preventDefault();});
	UL.mousemove(function(e2){	  
		if(e2.currentTarget!=e2.target)return;
		var UL2=UL.find("ul");
		
		UL2.css("top",-e2.offsetY/600*(UL2.height()-600));
		console.log("enter move",e2.offsetY);	
	})
	
	UL.on("mouseleave",function(){console.log("mouseleave")});
})