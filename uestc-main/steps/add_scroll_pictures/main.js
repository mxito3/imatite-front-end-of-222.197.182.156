/*
* @Author: YP
* @Date:   2017-11-06 12:42:16
* @Last Modified by:   YP
* @Last Modified time: 2017-11-07 00:04:13
*/

$(document).ready(function()
{
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
});