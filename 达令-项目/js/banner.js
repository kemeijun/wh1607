$(function(){
	var aBtn=$("#scroll-list").find("li");
	var oUl=$("#banner1-con").find("#scroll-image");
	var aLi=oUl.find("li");
	var iNow = 0;
			var timer = null;  //记录定时器的标识
			aBtn.click(function(){
				iNow = $(this).index();
				tab();
			});
			
			timer = setInterval(timerInner,3000);
			$("#banner1-con").hover(function(){
				clearInterval(timer);
			}, function(){
				timer = setInterval(timerInner,3000);
			});


			function tab(){
				aBtn.attr("class", " ");
				aBtn.eq(iNow).attr("class", "active");
				
				if(iNow == aLi.size() - 1){
					aBtn.eq(0).attr("class", "active");
											
				}
				
				oUl.animate({top: -480 * iNow}, function(){
					
					if(iNow == aLi.size() - 1){
						iNow = 0;
						oUl.css("top", 0);
						
					}
				});
			}

			function timerInner(){
				iNow++;
				tab();
			}
			
	
   
/*-------按钮切换------*/	
 var btn=$(".main-input");
 var count=0;
  btn.click(function(){
  	count++;
  	$(".main-scrll-one").animate({left:-1199*(count%2)})
  })

 
	
	
	
})
