
var checkCodeValue;

//写法一
$(function(){
	$("#box").find("li").click(function(){
		$("#banner-con").find(".boxes").css("display","none");
		$("#banner-con").find(".boxes").eq($(this).index()).css("display","block")
		
	})
//写法二
//$(function(){
//	$("li").click(function(){
//		$(".boxes").css("display","none");
//		$(".boxes").eq($(this).index()).css("display","block")
//	})
//})


/*----------------注册页面验证----------------*/	
/*---用户名验证---*/
	$("#name1").on({
		"focus":function(){
			$(this).css("border-color","#94d469").css("background-image","url(img/u4.jpg)");
			$("#sp1").css("display","none")
			
		},
		"blur":function(){
			$(this).css("border-color","").css("background-image","")
			var str=$(this).val();
			var partern01 = /^1(3|5|7|8)\d{9}$/ 
			if(partern01.test(str)!=true){
				$("#sp1").html("请输入正确的手机号码").css("display","block")
				
			}
			if(str==""){
				$("#sp1").html("请输入手机号码").css("display","block")
			}
			
		}
	})

/*-------验证码-------*/
    $("#verify").blur(function(){
    	$(this).css("border-color","").css("background-image","")
    	if($(this).val().toLowerCase()!=checkCodeValue.toLowerCase()){
    		$("#sp2").html("请输入正确的验证码").css("display","block")
    	}
        if($(this).val()==""){
        	$("#sp2").html("请输入验证码").css("display","block")
        }
    })
    $("#verify").focus(function(){
    	$(this).css("border-color","#94d469").css("background-image","url(img/k1.jpg)");
    	$("#sp2").css("display","none")
    })

/*页面一加载完成就产生随机数*/	
createCheckCode()

/*-------短信验证码-------*/
  $("#message").focus(function(){
  	   $(this).css("border-color","#94d469").css("background-image","url(img/k1.jpg)");
    	$("#sp3").css("display","none")
  })
  $("#message").blur(function(){
  	if($(this).val()==""){
        	$("#sp3").html("请输入验证码").css("display","block")
        	$(this).css("border-color","").css("background-image","")
        }
  })

/*-------密码验证-------*/
$("#pass1").on({
		"focus":function(){
			$(this).css("border-color","#94d469").css("background-image","url(img/u4.jpg)");
			$("#sp4").css("display","none")
			
		},
		"blur":function(){
			$(this).css("border-color","").css("background-image","")
			var str1=$(this).val();
			/*var partern02 =/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/*/
			if(str1.length<6||str1.length>20){
				$("#sp4").html("请输入6-20位密码").css("display","block")
				
			}
			if(str1==""){
				$("#sp4").html("请输入密码").css("display","block")
			}
			
		}
	})

  /*---------点注册跳转页面----------*/
    $("#sub").click(function(){
    	if(($("#name1").val()!="")&&($("#verify").val()!="")&&($("#pass1").val()!="")&&($("#message").val()!="")){
    	window.open("index.html")
    	}
    })

/*------------------------登录页面---------------------*/

/*---用户名验证---*/
  $("#name").on({
		"focus":function(){
			$(this).css("border-color","#94d469").css("background-image","url(img/u4.jpg)");
			$("#sp5").css("display","none")
			
		},
		"blur":function(){
			$(this).css("border-color","").css("background-image","")
			var str2=$(this).val();
			var partern03 = /^1(3|5|7|8)\d{9}$/ 
			if(partern03.test(str2)!=true){
				$("#sp5").html("请输入正确的手机号码").css("display","block")
				
			}
			if(str2==""){
				$("#sp5").html("请输入手机号码").css("display","block")
			}
			
		}
	})
/*----密码验证----*/
$("#pass").on({
		"focus":function(){
			$(this).css("border-color","#94d469").css("background-image","url(img/u4.jpg)");
			$("#sp6").css("display","none")
			
		},
		"blur":function(){
			$(this).css("border-color","").css("background-image","")
			var str3=$(this).val();
			var partern04 =/^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/
			if(partern04.test(str3)!=true){
				$("#sp6").html("请输入合法的密码").css("display","block")
				
			}
			if(str3==""){
				$("#sp6").html("请输入密码").css("display","block")
			}
			
		}
	})
    

})


/*--------产生随机数---------*/   
	function createCheckCode(){
	var arr = [];
	var checkCode = document.getElementById("bg");
	//alert(checkCode)
	while(arr.length<4){
		//alert("qqqq")
		//产生随机数
		var n = getRandom(48,122);
		if((n>48&&n<57)||(n>=65&&n<=90)||(n>=97&&n<=122)){
			arr.push(String.fromCharCode(n));
		}
	}
	 checkCodeValue = arr.join("");
	//alert(checkCodeValue)
	checkCode.innerHTML = checkCodeValue;
	
	function getRandom(start,end){
	var d = end+1-start;
	return Math.floor(Math.random()*d+start);
  }
}






	






















