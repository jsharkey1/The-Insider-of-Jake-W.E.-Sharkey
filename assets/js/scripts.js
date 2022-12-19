/* Mobile Menu */
var menuLists = document.getElementById("menuLists");
menuLists.style.maxHeight = "0px";
function togglemenu() {
	if(menuLists.style.maxHeight == "0px")
	{
		menuLists.style.maxHeight = "190px";
	}
	else
	{
		menuLists.style.maxHeight = "0px";
	}
}

/* Top Button */
let mybutton = document.getElementById("top");
window.onscroll = function() {scrollFunction()};
			
function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}
			
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}

/* Dark Mode */
function darkmode() {
	var element = document.body;
	element.classList.toggle("dark-mode");
}

function setCookie(c_name,value,exdays)
{
    var exdate=new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value=escape(value) + 
    ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
    document.cookie=c_name + "=" + c_value;
}

function getCookie(c_name)
{
    var i,x,y,ARRcookies=document.cookie.split(";");
    for (i=0;i<ARRcookies.length;i++)
    {
      x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
      y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
      x=x.replace(/^\s+|\s+$/g,"");
      if (x==c_name)
        {
        return unescape(y);
        }
      }
}

/* Audio Keeps Playing on different tabs */
var song = document.getElementsByTagName('audio')[0];
var played = false;
var tillPlayed = getCookie('timePlayed');
function update()
{
    if(!played){
        if(tillPlayed){
        song.currentTime = tillPlayed;
        song.play();
        played = true;
        }
        else {
                song.play();
                played = true;
        }
    }

    else {
    setCookie('timePlayed', song.currentTime);
    }
}
setInterval(update,0);

/* 
function darkmode() {
	const wasDarkmode = localStorge.getItem('dark-mode') === 'true';
	localStorge.setItem('dark-mode', !wasDarkmode);
	const element = document.body;
	element.classList.toggle('dark-mode', !wasDarkmode);
}

function onload() {
	document.body.classList.toggle('dark-mode', localStorge.getItem('dark-mode') === 'true');
} */