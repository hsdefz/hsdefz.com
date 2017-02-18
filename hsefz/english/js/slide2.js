// JavaScript Document
$(function(){
	var n=0;
	var m=0;
	setInterval(function(){return play(1)},5000);  //定时5000毫秒运行一次play函数进行动画
	$(".box_next").click(function(){return play(1)}) //next按钮运行play函数，同时赋值1 提供play进行判断
	$(".box_pre").click(function(){return play(2)})	 //next按钮运行play函数，同时赋值1 提供play进行判断
	function choises(m){
		$(".box_v_slide").animate({left:m},"slow");  //choises函数获得传递的left值后，对图片框进行移动，m就是获得add_i值
		}

	function play(n){  
		var left_value=$(".box_v_slide").position().left;//这里是获得当前图片框的left值
		var uu=Math.floor(left_value/1031)*1031	         //这里进行一点小处理，对left值取整使之成为整数 0 -300 -600 -900 -1200
		if(n==1){									     //play 函数通过前面调用反馈的值1和2，进行选择两种状态，第一个是往后走，第二个是往前走
			if(left_value>=-2062){						 //这里进行判断，如果走到最后一个图片框，也就是left值>=-900的时候，让left值回到0也就是回到第一个图片
				$(".box_v_slide").animate({left:uu-1031},"slow");
			}						
			else{
				$(".box_v_slide").animate({left:0},"slow");
			}
		}
		else{							
			if(left_value<=-1031){						//这里进行判断，如果走到第一个图片框，也就是left值<=-300的时候，让left值回到-1200也就是回到最后一个图片
				$(".box_v_slide").animate({left:uu+1031},"slow");
			}
			else{
				$(".box_v_slide").animate({left:-3093},"slow");
			}
		}
	}

		})