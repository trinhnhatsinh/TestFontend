// JavaScript Document
var countClick=0;
	function openMenuExplan(ele){
		if(countClick%2==0)
		{
			document.getElementsByClassName("menu-explan")[0].style.display = "block";
			ele.src="images/header_close.png";
		}
		else
		{
			document.getElementsByClassName("menu-explan")[0].style.display = "none";
			ele.src="images/header_menu_w.png";
		}
		countClick++;
	}