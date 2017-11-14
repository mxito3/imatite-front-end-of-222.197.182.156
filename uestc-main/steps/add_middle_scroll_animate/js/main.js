/*
* @Author: YP
* @Date:   2017-11-06 12:42:16
* @Last Modified by:   YP
* @Last Modified time: 2017-11-14 23:43:57
*/

$(document).ready(function()
{

//导航栏动画
$(".commenWrapper").mouseover(function(e){
var hoverDomObj = e.target.id;
var className0=e.target.className;
if(className0!='middle-nav-link')
{
	return;
}
var aim=$("#"+hoverDomObj).siblings();
var result;
for(var i=0;i<aim.length;i++)
{
	if(aim[i].tagName=='DIV')
	{
		result=aim[i].id;
	    $("#"+result).slideDown("fast");
	    break;
	}

}


});

$(".commenWrapper").mouseleave(function(){
	$(".nav-dropdown-commen").slideUp("fast");
});










//轮播图
var temp=document.getElementById('outWrapper');
    temp.style.left='0px';
var left;
var firstNeedMove=370;//1360


init(firstNeedMove,1);
$('#rightScrollButton').mousedown(function(){
	//temp.style.left='-7830px';
	slipToRight(firstNeedMove);
    console.log("需要右边移");
});





$('#leftScrollButton').mousedown(function(){
animate('left',1000);
var ani=setInterval(a,20);
function a()
{
//console.log("进来a了,左侧是"+Math.abs(parseInt(document.getElementById('outWrapper').style.left)));
if((Math.abs(parseInt(document.getElementById('outWrapper').style.left))-firstNeedMove)%1000==0)
{
	//console.log("a的函数判断成功");
	indexOfNeedHiddenDiv=controlIntroduceDiv('left',firstNeedMove);
	//console.log("需要隐藏"+indexOfNeedHiddenDiv);
	changeDivView('changeToHide',indexOfNeedHiddenDiv);	
	clearInterval(ani);
}
else
{
	return;
}
}


});
//中部图片轮播器
//
		

});

function move(len,firstNeedMove)
{

    var step=Math.abs(len/5);//每次移动的距离
    var times=parseInt(Math.abs(len)/step);
   
    var hadMovedTimes=0;

    var temp0=document.getElementById('outWrapper');
       var temp_left=parseInt(temp0.style.left);
       //	console.log("循环开始了temp_left是"+temp_left);
       	//console.log("循环开始了len是"+len);
   		 	if(temp_left==-370&&len>0)
   		 {
   		 	var checkTofirst=setInterval(checkWhetherToFirst(checkTofirst,'left'),10);
   		 	
   		 }
   		 else if(temp_left==-7370&&len<0)
   		 {
   		 	
   		 	var checkToLast=setInterval(checkWhetherToFirst(checkToLast,'right'),10);
   		 
   		 }
   		//
	function go()
	{
		
   		   var left;
   		   if(len<0)
   			{
   			
   				left=temp_left-step;
   			}
   			else
   			{
   			
   				left=temp_left+step;
   			}
    	if(hadMovedTimes>=times)
    	{
    		
    		return;
    	}
 	 
  	  	else
  	 	 {
  	 	 	if(len<0)
  	 	 	{
  	 	 		temp0.style.left=parseInt(temp0.style.left)-step+'px';
  	 	 	}
   		 	else
   		 	{
                temp0.style.left=parseInt(temp0.style.left)+step+'px';
   		 	}
   		    hadMovedTimes++;
   		 	setTimeout(go,100);
   		 }

	}
	go(); 
	
   		 
}

function animate(direction,len,firstNeedMove)
{
	var temp=document.getElementById('outWrapper');
	left=parseInt(temp.style.left)
	//console.log("左侧是"+left);
		if(direction=='right')
		{
			move(-len,firstNeedMove);
		}
		else
		{
			move(len,firstNeedMove);
		}
}


function controlIntroduceDiv(direction,firstNeedMove)	
{
	//console.log("控制经来； ");
	var temp=document.getElementById('outWrapper');
	left=parseInt(temp.style.left)
	var index=(Math.abs(left)-firstNeedMove)/1000;
	if(direction=='right')
	{	
		index+=1;
		return index;
	}
	else
	{
		index+=1;
		//console.log("我是控制函数，我返回的是"+index);
		return index;
	}
}





function changeDivView(view,index)
{
	var temp=document.getElementById('scroll_div'+index);
	if(view=='changeToHide')
	{
		temp.style.display='none';
	}
	else if(view=='changeToVis')
	{
		console.log("需要显示"+index);
		temp.style.display='inline-block';
	}
}




function init(firstNeedMove,first)
{
	if(first)
	{
	    changeIntroduceDivWhetherCanSee(7,'hide');
		slipToRight(firstNeedMove,1);
	}
}

function slipToRight(firstNeedMove,firstIn)
{
var indexOfNeedShowDiv;
indexOfNeedShowDiv=controlIntroduceDiv('right',firstNeedMove);
console.log("需要显示的索引是"+indexOfNeedShowDiv);
//changeMainColorOfImg(indexOfNeedShowDiv);
if(firstIn)
	{
        for(var j=0;j<=7;j++)
        	{
        		//var temp=document.getElementsByClassName('innerImage')[j];
        		$('.innerImage').addClass('filterToGray');
        	}
        	$('#scrollPicture2').removeClass('filterToGray');
		changeIntroduceDivWhetherCanSee(0,7,'hide');
		changeIntroduceDivWhetherCanSee(0,2,'visible');
		var temp=document.getElementById('outWrapper');
		temp.style.left=parseInt(temp.style.left)-2000+'px';
		animate('right',firstNeedMove,firstNeedMove);
	}
	else
	{
		changeMainColorOfImg('gray',indexOfNeedShowDiv-1);
		if(indexOfNeedShowDiv!=7)
		{
			changeMainColorOfImg('normal',indexOfNeedShowDiv);
		}
		
				if(indexOfNeedShowDiv<8)
               {
                 changeDivView('changeToVis',indexOfNeedShowDiv);	
                }
		animate('right',1000,firstNeedMove);
	}

}


function changeIntroduceDivWhetherCanSee(from,total,hideOrVisible)//总共需要显示多少块
{
	for(var i=from;i<=total;i++)
	{
		temp=document.getElementById('scroll_div'+i);
		if(hideOrVisible=='visible')
		{
				temp.style.display='inline-block';
		}
	    else
	   {
		         temp.style.display='none';
	   }
	}
}

function checkWhetherToFirst(threadId,leftOrRight)
{
	
	var temp0=document.getElementById('outWrapper');
    var temp_left=parseInt(temp0.style.left);
    console.log("判断好了 ，进啊来了temp_left是"+temp_left);
    if(temp_left==-370&&leftOrRight=='left')
    {
    	clearInterval(threadId);
    	ResolveTofirst(1000,'left');
    }
    if(temp_left==-7370&&leftOrRight=='right')
    {
    	clearInterval(threadId);
    	ResolveTofirst(1000,'right');
    }
}
function ResolveTofirst(needMoveLengthOfPer,leftOrRight)
{
	   var temp0=document.getElementById('outWrapper');
       var temp_left=parseInt(temp0.style.left);
	   console.log("始末进来了");
	   if(leftOrRight=='left')
	   {
	   	  changeIntroduceDivWhetherCanSee(1,7,'visible');
	   temp0.style.left=temp_left-7*needMoveLengthOfPer+'px';
	   }
	else
	{    console.log('最后的进来了');
	     changeIntroduceDivWhetherCanSee(2,7,'hide');
		 temp0.style.left=temp_left+7*needMoveLengthOfPer+'px';
	}
}

function changeMainColorOfImg(normalOrGray,index)
{
	var temp=document.getElementById('scrollPicture'+index);
	var $picture=$(temp);
	if(normalOrGray=='normal')
	{
		$picture.removeClass('filterToGray');
	}
	else
	{
		$picture.addClass('filterToGray');
	}

}