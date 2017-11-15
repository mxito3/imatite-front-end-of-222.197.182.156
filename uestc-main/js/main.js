/*
* @Author: YP
* @Date:   2017-11-06 12:42:16
* @Last Modified by:   YP
* @Last Modified time: 2017-11-15 19:17:52
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
firstNeedMove=370;


init(firstNeedMove,1);//初始化
autoScroll();//自动轮播
$('#rightScrollButton').mousedown(function(){
	if(haveAnimateNow())
		{
			return;
		}
	ads();
   
});





$('#leftScrollButton').mousedown(function(){
	if(haveAnimateNow())
		{
			return;
		}
	slipToLeft();
});
});

function move(len,firstNeedMove)
{
    var step=Math.abs(len/5);//每次移动的距离
    var times=parseInt(Math.abs(len)/step);
    var hadMovedTimes=0;
    var temp0=document.getElementById('outWrapper');
  
    
	function go()
	{
		  var temp_left=parseInt(temp0.style.left);
   		   var left;
   		   if(len<0)
   			{
   				left=temp_left-step;
   				
   			}
   			else
   			{
   				left=temp_left+step;
   		
   			}
    	if(hadMovedTimes>=times)//移动次数够了
    	{ 		
    		return;
    	}
 	 
  	  	else
  	 	 {

  	 	 	if(left>-370)//如果到最左边
  	 	 	{
  	 	 	var indexOfNeedHiddenDiv=controlIntroduceDiv('left',370);
            changeDivView('changeToHide',indexOfNeedHiddenDiv);	
            var indexOfNeedShowDiv=controlIntroduceDiv('left',370);
            if(indexOfNeedShowDiv==1)
            {
            	indexOfNeedShowDiv=8;
            }
 
  	 	 	changeSomeIntroduceDivWhetherCanSee(0,6,'visible');
  	 	 		temp0.style.left=-7370+'px';
  	 	 	}
  	 	 	if(left<-7370)//如果到最右边
  	 	 	{
                temp0.style.left=-370+'px';
  	 	 	}
  	 	 	if(len<0)
  	 	 	{
  	 	 		temp0.style.left=parseInt(temp0.style.left)-step+'px';
  	 	 	}
   		 	else
   		 	{
                temp0.style.left=parseInt(temp0.style.left)+step+'px';
   		 	}
   		    hadMovedTimes++;
   		 	setTimeout(go,150);//递归
   		 }

	}
	go();
}

function animate(direction,len,firstNeedMove)
{
	var temp=document.getElementById('outWrapper');
	left=parseInt(temp.style.left)
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
	var temp=document.getElementById('outWrapper');
	left=parseInt(temp.style.left)
	var index=(Math.abs(left)-firstNeedMove)/1000+1;
	return index;	
}





function changeDivView(view,index)//控制介绍块是否可见
{
	if(!(index%1===0))
	{
		return;
	}
if(index>=8)
{
	return;
}
	var temp=document.getElementById('scroll_div'+index);
	
	if(view=='changeToHide')
	{
		temp.style.display='none';
	}
	else if(view=='changeToVis')
	{
		//$('#temp0').hide();
		temp.style.display='inline-block';
		$('#'+'scroll_div'+index).addClass('animateDiv'+index);
		//$('#'+'scroll_div'+index).addClass('testB');
	}
}




function init(firstNeedMove,first)
{
	if(first)
	{
	    changeSomeIntroduceDivWhetherCanSee(7,'hide');
		slipToRight(firstNeedMove,1);
	}
}

function slipToRight(firstNeedMove,firstIn)
{

	var temp0=document.getElementById('outWrapper');
       var temp_left=parseInt(temp0.style.left);
     
    var indexOfNeedShowDiv=controlIntroduceDiv('right',firstNeedMove);
    if(firstIn)
	 {
	
        for(var j=0;j<=7;j++)
        	{
        		
        		$('.innerImage').addClass('filterToGray');
        	}
        	$('#scrollPicture2').removeClass('filterToGray');
		changeSomeIntroduceDivWhetherCanSee(0,7,'hide');
		changeSomeIntroduceDivWhetherCanSee(0,2,'visible');
		var temp=document.getElementById('outWrapper');
		temp.style.left=parseInt(temp.style.left)-2000+'px';
		animate('right',firstNeedMove,firstNeedMove);
	 }
	else
	{
		if(haveAnimateNow())
{
	return;
}
        //console.log("aaa是"+indexOfNeedShowDiv);
        if(indexOfNeedShowDiv==8)
        {
        	changeMainColorOfImg('gray',indexOfNeedShowDiv-1);
        	indexOfNeedShowDiv=1;
        }	
        changeDivView('changeToVis',indexOfNeedShowDiv);
        changeDivView('changeToHide',indexOfNeedShowDiv+1);
        changeMainColorOfImg('gray',indexOfNeedShowDiv-1);
	    changeMainColorOfImg('normal',indexOfNeedShowDiv);
		animate('right',1000,firstNeedMove);  
	}

}


function changeSomeIntroduceDivWhetherCanSee(from,total,hideOrVisible)//同时改变多个块
{
	for(var i=from;i<=total;i++)
	{
		if(hideOrVisible=='visible')
		{
			  
        	changeDivView('changeToVis',i);
		}
	    else
	   {
		     changeDivView('changeToHide',i);  
	   }
	}
}



function changeMainColorOfImg(normalOrGray,index)
{
	if(!(index%1===0))
	{
		return;
	}
	var temp=document.getElementById('scrollPicture'+index);
	var $picture=$(temp);
	if(normalOrGray=='normal')
	{
		console.log('点亮'+index);
		$picture.removeClass('filterToGray');
	}
	else
	{
		console.log('变灰'+index);
		$picture.addClass('filterToGray');
	}

}


function slipToLeft()
{
	
    	
    var indexOfNeedShowDiv=controlIntroduceDiv('left',370);
    changeMainColorOfImg('gray',indexOfNeedShowDiv-1);
    changeMainColorOfImg('normal',indexOfNeedShowDiv-2);
    if(indexOfNeedShowDiv==1)
      {
        indexOfNeedShowDiv=8;
        changeMainColorOfImg('normal',6);
       }	
       changeDivView('changeToHide',indexOfNeedShowDiv-1);
       animate('left',1000);
}
function autoScroll()
{
	console.log('进来了');
	scroll=setInterval(ads,4000);
	$('#stopScrollButton').click(function()
	{

		document.getElementById('stopScrollButton').style.display='none';
		document.getElementById('continueScrollButton').style.display='inline-block';
		clearInterval(scroll);
	});
	$('#continueScrollButton').click(function()
	{
		document.getElementById('continueScrollButton').style.display='none';
		document.getElementById('stopScrollButton').style.display='inline-block';
		scroll=setInterval(ads,4000);
	});
} 

function ads()
{
slipToRight(firstNeedMove);
}
function haveAnimateNow()
{
var temp0=document.getElementById('outWrapper');
 var temp_left=parseInt(temp0.style.left);
 if((Math.abs(temp_left)-370)%1000!=0)
 {
 	console.log("返回了true");
 	return true;
 }
 else
 {
 	return false;
 }
}