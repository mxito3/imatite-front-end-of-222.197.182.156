/*
* @Author: YP
* @Date:   2017-11-06 12:42:16
* @Last Modified by:   YP
* @Last Modified time: 2017-11-17 14:25:59
*/
window.onload=function()
{
	resolveFooterSelectClick();
}



$(document).ready(function()
{


window.setTimeout(resolveDropDownMenuHover,1000);
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




//底部select的点击事件
// resolveFooterSelectClick();

});

$(".commenWrapper").mouseleave(function(){
	$(".nav-dropdown-commen").slideUp("fast");
});

//轮播
var temp=document.getElementById('outWrapper');
    temp.style.left='0px';
var left;
firstNeedMove=370;
lengthOfPerMove=1000;
PictureNum=7;
init(firstNeedMove,1);//初始化
autoScroll();//自动轮播
$('#rightScrollButton').mousedown(function(){
	if(haveAnimateNow())
		{
			return;
		}
	slipToRight(firstNeedMove);
   
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

  	 	 	if(left>-firstNeedMove)//如果到最左边
  	 	 	{
  	 	 	var indexOfNeedHiddenDiv=controlIntroduceDiv('left',firstNeedMove);
            changeDivView('changeToHide',indexOfNeedHiddenDiv);	
            var indexOfNeedShowDiv=controlIntroduceDiv('left',firstNeedMove);
            if(indexOfNeedShowDiv==1)
            {
            	indexOfNeedShowDiv=(PictureNum+1);
            }
 
  	 	 	changeSomeIntroduceDivWhetherCanSee(0,(PictureNum-1),'visible');
  	 	 		temp0.style.left=-(firstNeedMove+PictureNum*lengthOfPerMove)+'px';
  	 	 	}
  	 	 	if(left<-(firstNeedMove+PictureNum*lengthOfPerMove))//如果到最右边
  	 	 	{
                temp0.style.left=-firstNeedMove+'px';
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
	var index=(Math.abs(left)-firstNeedMove)/lengthOfPerMove+1;
	return index;	
}





function changeDivView(view,index)//控制介绍块是否可见
{
	if(!(index%1===0))
	{
		return;
	}
if(index>=(PictureNum+1))
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
	    changeSomeIntroduceDivWhetherCanSee(PictureNum,'hide');
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
	
        for(var j=0;j<=PictureNum;j++)
        	{
        		
        		$('.innerImage').addClass('filterToGray');
        	}
        	$('#scrollPicture2').removeClass('filterToGray');
		changeSomeIntroduceDivWhetherCanSee(0,PictureNum,'hide');
		changeSomeIntroduceDivWhetherCanSee(0,2,'visible');
		var temp=document.getElementById('outWrapper');
		temp.style.left=parseInt(temp.style.left)-2*lengthOfPerMove+'px';
		animate('right',firstNeedMove,firstNeedMove);
	 }
	else
	{
		if(haveAnimateNow())
{
	return;
}
        //console.log("aaa是"+indexOfNeedShowDiv);
        if(indexOfNeedShowDiv==(PictureNum+1))
        {
        	changeMainColorOfImg('gray',indexOfNeedShowDiv-1);
        	indexOfNeedShowDiv=1;
        }	
        changeDivView('changeToVis',indexOfNeedShowDiv);
        changeDivView('changeToHide',indexOfNeedShowDiv+1);
        changeMainColorOfImg('gray',indexOfNeedShowDiv-1);
	    changeMainColorOfImg('normal',indexOfNeedShowDiv);
		animate('right',lengthOfPerMove,firstNeedMove);  
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
	
    	
    var indexOfNeedShowDiv=controlIntroduceDiv('left',firstNeedMove);
    changeMainColorOfImg('gray',indexOfNeedShowDiv-1);
    changeMainColorOfImg('normal',indexOfNeedShowDiv-2);
    if(indexOfNeedShowDiv==1)
      {
        indexOfNeedShowDiv=(PictureNum+1);
        changeMainColorOfImg('normal',(PictureNum-1));
       }	
       changeDivView('changeToHide',indexOfNeedShowDiv-1);
       animate('left',lengthOfPerMove);
}
function autoScroll()
{
	console.log('进来了');
	scroll=setInterval(rightClickDoor,4000);
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
		scroll=setInterval(rightClickDoor,4000);
	});
} 

function rightClickDoor()
{
slipToRight(firstNeedMove);
}
function haveAnimateNow()
{
var temp0=document.getElementById('outWrapper');
 var temp_left=parseInt(temp0.style.left);
 if((Math.abs(temp_left)-firstNeedMove)%lengthOfPerMove!=0)
 {
 	console.log("返回了true");
 	return true;
 }
 else
 {
 	return false;
 }
}


function resolveFooterSelectClick()
{

	$('#bottomSearchLinks select').change(function()
	{
		
		var temp_link=$(this).find("option:selected").attr("href");
		if(temp_link)
		{
             window.open(temp_link);
		}
		
	});
}

function resolveDropDownMenuHover()
{
	 for(var i=1;i<=11;i++)
	 {
		document.getElementById('hide'+i).style.display='none';
	 }
	 document.getElementById('firstOnShowBox').style.display='block';
	 var parentList=$('#mainContentmiddle_left ul')[0];
	 parentList.addEventListener('mouseover',function(){
	var target=event.target;
	console.log(target.id);
		for(var i=1;i<=11;i++)
	{
		document.getElementById('hide'+i).style.display='none';
	}
			
		if(target.id==0)
		{
			if(document.getElementById('firstOnShowBox'))
			{
					document.getElementById('firstOnShowBox').style.display='inline-block';
			}
		
		}
		else
		{
	if(document.getElementById('firstOnShowBox'))
			{
					document.getElementById('firstOnShowBox').style.display='none';
			}
			//document.getElementById('firstOnShowBox').style.display='none';
			document.getElementById('hide'+target.id).style.display='inline-block';
		}
	 },false);
}
