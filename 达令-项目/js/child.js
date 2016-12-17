$(function(){
	$.ajax({
			url: "../child.json",
			type: "GET",
			success: function(res){
	        var html = "";
	       
				for(var i = 0; i < res[0].title.length; i++){
					html += '<a class="index-a" href="#">'+res[0].title[i]+'</a>';
				}

				$("#index-p").html(html);
				var html1="";
				for(var i = 0; i < res[1].nav.length; i++){
					if(i==0){
						html1 += '<li class="nav_mylili"><a class="nav_li" style="padding: 0 75px 0 95px;" href="#">'+res[1].nav[i]+'</a><span class="index-myspan"></span></li>'
					}else{
					html1 += '<li><a  href="#">'+res[1].nav[i]+'</a></li>';
					}
				}
				$("#nav-ul").html(html1);
				
              }
	})
	
	
	var timer;
	var timer2;
	$(".index2-myspan2").hover(function(){
		clearTimeout(timer2);
		$(".display-div").css("display","block");
	
	},function(){
		timer=setTimeout(function(){
		$(".display-div").css("display","none");
		},100);
	})
	
	$(".display-div").hover(function(){
		clearTimeout(timer);
		
	},function(){
		timer2=setTimeout(function(){
			$(".display-div").css("display","none");
		},100)
	})
	
	/*---------点击累加数字效果-----------------*/
	
	$(".index2-div2-span2").click(function(){
		var count=$(".index2-div2-span1").html();
		//alert(count)
		count++;
		$(".index2-div2-span1").html(count)
		
	})
	$(".index2_div2_span3").on("click",function(){
		var count2=$(".index2-div2-span1").html();
		//alert(count)
		count2--;
		$(".index2-div2-span1").html(count2)
		if(count2<=0){
			$(".index2-div2-span1").html(0);
		}
		
	})
	
	
	


	
	
	
})
window.onload=function(){
		
	/*-----------------放大镜效果---------------------*/
	
	var oS_box=document.getElementsByClassName("div1")[0];
	 
		var oS_position=oS_box.children;
	
		var oS_mark=oS_position[0];
	
		var oB_box=document.getElementsByClassName("div2")[0];
	
		var oB_box_all=document.getElementsByClassName("div3")[0];

		oS_mark.onmouseover=function(){
			oS_position[2].style.display='block';
			oB_box.style.display='block';

		}
		oS_mark.onmouseout=function(){
			oS_position[2].style.display='none';
			oB_box.style.display='none';
		}

		oS_mark.onmousemove=function(event){
			var evt=event||window.event;

			var left=evt.offsetX-oS_position[2].offsetWidth/2;
			//console.log(left)
			
			if(left<0){
				left=0;
			}else if(left>oS_box.offsetWidth-oS_position[2].offsetWidth){
				left=oS_box.offsetWidth-oS_position[2].offsetWidth;
			}
			//console.log(left)
			oS_position[2].style.left=left+'px';


			var top=evt.offsetY-oS_position[2].offsetHeight/2;
			if(top<0){
				top=0;
			}else if(top>oS_box.offsetHeight-oS_position[2].offsetHeight){
				top=oS_box.offsetHeight-oS_position[2].offsetHeight
			}
			//console.log(top)
			oS_position[2].style.top=top+'px';

			//移动的比例  把X值和Y值换算成比例;

			var proportionX=left/(oS_box.offsetWidth-oS_position[2].offsetWidth);
			var proportionY=top/(oS_box.offsetHeight-oS_position[2].offsetHeight);

			console.log(proportionX+':'+proportionY)

			//利用比例去算出大小不同的元素的偏移距离；

			oB_box_all.style.left=-proportionX*(oB_box_all.offsetWidth-oB_box.offsetWidth)+'px';

			oB_box_all.style.top=-proportionY*(oB_box_all.offsetHeight-oB_box.offsetHeight)+'px';

		}

	
	
	
	
	
}





