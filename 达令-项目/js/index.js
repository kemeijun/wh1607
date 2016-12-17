$(function(){
	$("#code").mouseover(function(){
		$("#imag").css("display","block")
	})
	$("#code").mouseout(function(){
		$("#imag").css("display","none")
	})
	

	
	/*----请求Json数据-----*/
	$.ajax({
			url: "index.json",
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
	           /* 导航请求JSON数据*/
	            var dl1=$("#banner-dl1");
	            var dt1=$('<dt class="mydt1"></dt>');
	            var dd1=$('<dd class="mydd1"></dd>')
	            dt1.html(res[2].product[0]);
	            dt1.appendTo(dl1);
	            //alert(res[2].product[1])
	            for(var i=1;i<res[2].product.length;i++){
	            	
	            	var a=$('<a href="#"></a>');
	            	a.html(res[2].product[i])
	            	a.appendTo(dd1);
	            	dd1.appendTo(dl1);
	            }
	            
	            var dl2=$("#banner-dl2");
	            var dt2=$('<dt class="mydt2"></dt>');
	            var dd2=$('<dd class="mydd2"></dd>');
	            dt2.html(res[3].food[0]);
	            dt2.appendTo(dl2);
	            //alert(res[2].food[1])
	            for(var i=1;i<res[3].food.length;i++){
	            	
	            	var a=$('<a href="#"></a>');
	            	a.html(res[3].food[i])
	            	a.appendTo(dd2);
	            	dd2.appendTo(dl2);
	            }
	           
	           var dl3=$("#banner-dl3");
	            var dt3=$('<dt class="mydt3"></dt>');
	            var dd3=$('<dd class="mydd3"></dd>');
	            dt3.html(res[4].life[0]);
	            dt3.appendTo(dl3);
	            //alert(res[2].food[1])
	            for(var i=1;i<res[4].life.length;i++){
	            	
	            	var a=$('<a href="#"></a>');
	            	a.html(res[4].life[i])
	            	a.appendTo(dd3);
	            	dd3.appendTo(dl3);
	            }
	            
	            var dl4=$("#banner-dl4");
	            var dt4=$('<dt class="mydt4"></dt>');
	            var dd4=$('<dd class="mydd4"></dd>');
	            dt4.html(res[5].thing[0]);
	            dt4.appendTo(dl4);
	            //alert(res[2].food[1])
	            for(var i=1;i<res[5].thing.length;i++){
	            	
	            	var a=$('<a href="#"></a>');
	            	a.html(res[5].thing[i])
	            	a.appendTo(dd4);
	            	dd4.appendTo(dl4);
	            }
	            
	            $("#banner-myp").html(res[2].product[1]);
	              //alert(res[6].imges[0])
	              var im=$("#banner-images");
	           for(var i=1;i<res[6].imges.length;i++){
	           	var as=$('<a class="res6-as" href="#"></a>');
	           	var img=$('<img src="" /> ')
	           	 img.appendTo(as)
	           	   img.attr("src",res[6].imges[i]);
	           	   as.appendTo(im)
	           }
	           
	           var span=document.getElementsByClassName("myddt1");
	           span.innerHTML=res[7].face[0];
	           //alert(span)
	           //alert(res[7].face[0])
	           var div=$(".myddd1");
	           for(var i=1;i<res[7].face.length;i++){
	           var ae=$('<a class="res7-a" href="#"></a>');
	           ae.html(res[7].face[i]);
	           ae.appendTo(div);
	          
	           }
	           
	           var div1=$(".myddd2");
	           for(var i=1;i<res[8].cosmetics.length;i++){
	           var ae1=$('<a class="res7-a" href="#"></a>');
	           ae1.html(res[8].cosmetics[i]);
	           ae1.appendTo(div1);
	          
	           }
	           
	           var div2=$(".myddd3");
	           for(var i=1;i<res[9].health.length;i++){
	           var ae2=$('<a class="res7-a" href="#"></a>');
	           ae2.html(res[9].health[i]);
	           ae2.appendTo(div2);
	          
	           }
	           
	           
	           
	           $("#banner-imim").attr("src",res[6].imges[0]);
	           
	          /*----------main部分请求JSON数据-------*/ 
	        

              
               //alert(res[19].goods[0].ig)
	           for(var i=0;i<res[19].goods.length;i++){
	           	   $(".main-img").eq(i).attr("src",res[19].goods[i].ig);
	           	   $(".main-span1").eq(i).html(res[19].goods[i].price);
	           	   $(".main-span2").eq(i).html(res[19].goods[i].price1);
	           	   $(".main-span3").eq(i).html(res[19].goods[i].celect);
	           	   $(".last-a").eq(i).html(res[19].goods[i].discount);
	           }
	           
	           for(var i=0;i<res[20].more.length;i++){
	           	    $(".main-img2").eq(i).attr("src",res[20].more[i].ig);
	           	    $(".main-span4").eq(i).html(res[20].more[i].price);
	           	   $(".main-span5").eq(i).html(res[20].more[i].price1);
	           	   $(".main-span6").eq(i).html(res[20].more[i].celect);
	           	   $(".last-a2").eq(i).html(res[20].more[i].discount);
	           }
	           
	           for(var i=0;i<res[21].photos.length;i++){
	           	$(".main4-image").eq(i).attr("src",res[21].photos[i])
	           }
	           
	           for(var i=0;i<res[22].article.length;i++){
	           	   $(".main-img3").eq(i).attr("src",res[22].article[i].ig);
	           	   $(".main-span7").eq(i).html(res[22].article[i].price);
	           	   $(".main-span8").eq(i).html(res[22].article[i].price1);
	           	   $(".last-a3").eq(i).html(res[22].article[i].discount);
	           }
	           
	           for(var i=0;i<res[23].gods.length;i++){
	           	    $(".mypicture").eq(i).attr("src",res[23].gods[i].images);
	           	    $(".mypic").eq(i).attr("src",res[23].gods[i].pic);
	           	     $(".main6-a").eq(i).html(res[23].gods[i].word);
	           	   
	           }
	           
	            for(var i=1;i<res[23].gods.length;i++){
	            	$(".span-1").eq(1).html(res[23].gods[i].price);
	           	    $(".span-2").eq(1).html(res[23].gods[i].price1);
	           	    $(".as1").eq(1).html(res[23].gods[i].list1);
	           	    $(".as2").eq(1).html(res[23].gods[i].list2);
	            	
	            }
	           
	           
			}
		});
	
	
	/*导航栏效果*/
	var timer;
	var timer2;
	$("#banner-dl1").hover(function(){
		clearTimeout(timer2);
		$("#banner-box-first").css("display","block");
	
	},function(){
		timer=setTimeout(function(){
		$("#banner-box-first").css("display","none");
		},100);
	})
	
	$("#banner-box-first").hover(function(){
		clearTimeout(timer);
		
	},function(){
		timer2=setTimeout(function(){
			$("#banner-box-first").css("display","none");
		},100)
	})
	
	
	var timer3;
	var timer4;
	$("#banner-dl2").hover(function(){
		clearTimeout(timer4);
		$("#banner-box-second").css("display","block");
	
	},function(){
		timer3=setTimeout(function(){
		$("#banner-box-second").css("display","none");
		},100);
	})
	
	$("#banner-box-second").hover(function(){
		clearTimeout(timer3);
		
	},function(){
		timer4=setTimeout(function(){
			$("#banner-box-second").css("display","none");
		},100)
	})
	
	
	var timer5;
	var timer6;
	$("#banner-dl3").hover(function(){
		clearTimeout(timer6);
		$("#banner-box-thrid").css("display","block");
	
	},function(){
		timer5=setTimeout(function(){
		$("#banner-box-thrid").css("display","none");
		},100);
	})
	
	$("#banner-box-thrid").hover(function(){
		clearTimeout(timer5);
		
	},function(){
		timer6=setTimeout(function(){
			$("#banner-box-thrid").css("display","none");
		},100)
	})
	
	
	/*-------------main部分-选项卡切换效果---------------*/
	
	$(".main5-myul li").click(function(){
		$(this).siblings().attr("class","");
		$(".main5-mybox").eq($(this).index()).css("display","block");
		$(this).attr("class","main5-myli");
		$(".main5-mybox").eq($(this).index()).siblings().css("display","none");
	})
	
	/*-------------main部分-选项卡切换效果---------------*/
	
	 	$(".main6-mybox1").find(".main6-mybox1-one").hover(function(){
	 	    $(".main6-mybox1-top").css("display","none");
	 	     $(".main6-mybox1-bottom").css("display","block");
	 	},function(){
	 		$(".main6-mybox1-top").css("display","block");
	 	     $(".main6-mybox1-bottom").css("display","none"); 
	 })
	 	
	/*-----商品购物车图标划过效果----------*/
    $(".main-mybox").hover(function(){
    	  $(".main-mybox").find("input").eq($(this).index()).css("display","block")
    	
    },function(){
         $(".main-mybox").find("input").eq($(this).index()).css("display","none")
    })
    
    
	$(".main-mybox2").hover(function(){
		
    	  $(this).find("input").eq(0).css("display","block")
    	
    },function(){
         $(this).find("input").eq(0).css("display","none")
    })
	
	
	
	
/*--------------------购物车效果-----------------------*/
  $(".index-as2").click(function(){
  		if($(".all-box").css("right")=="-281px")
  		{
			$(".all-box").animate({
				right: '0'
			})
			sc_msg();
		}else
		{
			
			$(".all-box").animate({
				right: "-281px"
			})
		}
	})

		
     
       sc_car();
      // alert("a");
      $(".myinput-btn").click( function(){
      	//alert(111)
			//购物车数量增加
			var id = this.id;
			var first = $.cookie("goods") == null ? true : false; //判断是够有cookie缓存

			var same = false; //判断是否有相同的商品

			//如果是第一次添加
			if(first){
				//建立存储的json结构  
				$.cookie("goods", '[{id:' + id + ',num:1}]');
				$.cookie("first","false");
				
			}else{
				var str = $.cookie("goods");
				//eval()  类似 JSON.parse()  字符串转对象
				var arr = eval(str);
				for(var i in arr){
					if(arr[i].id == id){
						arr[i].num++; //如果有相同的商品,num自增
						var cookieStr = JSON.stringify(arr);
						$.cookie("goods", cookieStr);
						same = true;
					}
				}
				if(!same){
					var obj = {id: id, num: 1};
					arr.push(obj);
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr);
				}
			}
			sc_car();
			sc_msg();
		})

    //购物车数量
    function sc_car(){
			var sc_str = $.cookie("goods");
			if(sc_str){
				var sc_arr = eval(sc_str);
				var sc_num = 0; //记录商品数量的累加
				for(var i in sc_arr){
					sc_num += Number(sc_arr[i].num);
				}
				$(".index-span-three2").html(sc_num);
				$(".index-span-three").html(sc_num);
			}
		}

    
    function sc_msg(){
			$.ajax({
				url: "index.json",
				type: "GET",
				success: function(res){
					var sc_str = $.cookie("goods");
					if(sc_str){
						var sc_arr = eval(sc_str);
						var html = "";
						var all=0;
						
						for(var i in sc_arr){
					html += '<li><a class="a1" href="#"><div class="img1"><img class="img2" src="'+res[19].goods[sc_arr[i].id].ig+'"/></div><div class="div1_1"><p class="p1">'+res[19].goods[i].discount+'</p><span class="span1" title="'+i+'">+</span><span class="span2">'+sc_arr[i].num+'</span><span class="span3" title="'+i+'">-</span></div><div class="div1_2"><p class="p2">'+res[19].goods[i].price+'</p><span class="a2">删除</span></div></a></li>';
						}

						$(".body-div2 ul").html(html);
					}
					 var lis=$(".body-div2").find("li");
				
					   for(var j=0;j<lis.length;j++){
					   	  var money=lis.eq(j).find(".p2").html();
					   	  money=Number(money.substring(1));
					   	  
					   	  var count=Number(lis.eq(j).find(".span2").html());
					 
					   	  
					   	  lis.eq(j).find(".p2").html(money*count);
					   	  all+=Number(lis.eq(j).find(".p2").html());
					   	 $(".shopping-box-span2").html(all);
					   	 $(".shopping-box-span1").html($(".index-span-three2").html())
					   }
					 
					
					 $(".a2").click(function(){
	 	
	 	                			$(".body-div2 li").eq($(this).parents("li").index()).hide(300)
	 	                			
	 	               var cookie=eval( $.cookie("goods"));
	 	               //alert(cookie)
	 	               cookie.splice($(this).parents("li").index(),1);
	 	               cookie=JSON.stringify(cookie);
	 	               $.cookie("goods",cookie)
	 	               
	 	               
	 	               
	                  })
					  /*---------点击累加数字效果-----------------*/
	
	 $(".span1").click(function(){
	   var num=$(this).next().html();
	   var title=this.title;
	   $(this).next().html(++num);
	   var str1=$.cookie("goods");
	   var arr=eval(str1);
	   for(var i in arr){
	   	if(i==title){
	   		arr[i].num++; //如果有相同的商品,num自增
				var cookieStr = JSON.stringify(arr);
				$.cookie("goods", cookieStr);
	   	}
	   }
		
		sc_car();
			sc_msg();
		
		
	})
	$(".span3").on("click",function(){
			var num=$(this).prev().html();
		var title=this.title;
		var str = $.cookie("goods");
		var arr = eval(str);
		if(num>1){
			$(this).prev().html(--num);
			for(var i in arr){
				if(i == title){
					arr[i].num--; //如果有相同的商品,num自增
					var cookieStr = JSON.stringify(arr);
					$.cookie("goods", cookieStr);
					
				}
			}
		}
		
		
		sc_msg();
		sc_car();
		
	})  
	
				}
			})
		}


    $(".div-mybox").click(function(){
    	$(".all-box").css("right","-281px")
    })
   
   
	
})
