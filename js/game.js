var pBtn_state = 0; 
var lBtn_state =0;
var bBtn_state =0;
var csBtn_state=0;
var ccBtn_state=0;

var totalTimes = 0;
var flipflop = 0;
var timer1 =0;
var ChangeSize=0;
var ChangeColor =0;
var colors=['skyblue','purple','green','thistle','black','red','brown','sandybrown'];
var colorIdx=0;
var time2 =0;
var totalPopped =0;

$(document).ready(function(){
	//DEFINE THE INITIAL VIEW
	$("#pBtn").show();
	$("#csBtn").show();
	$("#ccBtn").show();
	$("#bInfo").show();
	$("#PlayGround").hide();
	$("#digitalClock").html(Date());
	$("#visitor").html("[Not Logged In]");
	
	//Button bindings 
	$("#ccBtn").click(function (){
		if(ccBtn_state==0){
			ccBtn_state ++;
			$("#ccBtn").html("Freeze Color");
			ChangeColor=1;
		}else{
			ccBtn_state =0;
			$("#ccBtn").html("Change Color");
			ChangeColor =0;
		}
	})
	
	$(".bubble").click(function(){
		$(this).hide();
		totalPopped ++;
		if (totalPopped ==8){
			//claim the winning
			$("#pBtn").html("You WIN!!");
			//stop the game 
			clearTimeout(timer2);
			stopGame();
			totalPopped =0;
		}
	})
	$("#csBtn").click(function (){
		if(csBtn_state==0){
			csBtn_state ++;
			$("#csBtn").html("Freeze Size");
			ChangeSize =1;
		}else{
			csBtn_state =0;
			$("#csBtn").html("Change Size");
			ChangeSize =0;
		}
	})
	
	$("#pBtn").click(function(){
		if(pBtn_state == 0){
			pBtn_state++;
			$("#pBtn").html("Stop Game");
			$("#PlayGround").show();
			startGame();
		}else {
			pBtn_state = 0;
			$("#pBtn").html("Play");
			stopGame();
		}
	})
	
	$("#lBtn").click(function(){
		if(lBtn_state == 0){
			lBtn_state ++;
			$("#lBtn").html("Logout");
			//call cookies.set 
			var visitor = prompt ("Please enter your name : ","");
			Cookies.set("JoeCookie", visitor, {expire : 1});
			$("#visitor").html("["+visitor+"]");
			$("#pBtn").show();
			$("#csBtn").show();
			$("#ccBtn").show();
			
		} else{
			lBtn_state =0;
			$("#lBtn").html("Login");
			//remove the Cookie
			Cookies.remove("JoeCookie");
			$("#visitor").html("");
			$("#pBtn").hide();
			$("#csBtn").hide();
			$("#ccBtn").hide();
			
		}
		
	})
	
	$("#bBtn").click(function(){
		if(bBtn_state ==0){
			bBtn_state ++;
			$("#bBtn").html("Clear");
			//show browser secrets
			$("#bInfo").show();
			detectBrowser();
				
		} else {
			bBtn_state=0;
			$("#bBtn").html("Browser Detect");
			$("#bInfo").html("");
		}
	})
	
	//utility functions
			function startGame(){
		//get the foo object 
		$("#foo1").show();
		$("#foo1").css("left", '400px');
		$("#foo1").css("top",'200px');
		$("#foo1").css("width",'50px');
		$("#foo1").css("height",'50px');
		$("#foo1").css("backgroundColor","red");
		
		$("#foo2").show();
		$("#foo2").css("left", '400px');
		$("#foo2").css("top",'200px');
		$("#foo2").css("width",'50px');
		$("#foo2").css("height",'50px');
		$("#foo2").css("backgroundColor","purple");
		
		$("#foo3").show();
		$("#foo3").css("left", '400px');
		$("#foo3").css("top",'200px');
		$("#foo3").css("width",'50px');
		$("#foo3").css("height",'50px');
		$("#foo3").css("backgroundColor","green");
		
		$("#foo4").show();
		$("#foo4").css("left", '400px');
		$("#foo4").css("top",'200px');
		$("#foo4").css("width",'50px');
		$("#foo4").css("height",'50px');
		$("#foo4").css("backgroundColor","yellow");
		
		$("#foo5").show();
		$("#foo5").css("left", '400px');
		$("#foo5").css("top",'200px');
		$("#foo5").css("width",'50px');
		$("#foo5").css("height",'50px');
		$("#foo5").css("backgroundColor","black");
		
		$("#foo6").show();
		$("#foo6").css("left", '400px');
		$("#foo6").css("top",'200px');
		$("#foo6").css("width",'50px');
		$("#foo6").css("height",'50px');
		$("#foo6").css("backgroundColor","grey");
		
		$("#foo7").show();
		$("#foo7").css("left", '400px');
		$("#foo7").css("top",'200px');
		$("#foo7").css("width",'50px');
		$("#foo7").css("height",'50px');
		$("#foo7").css("backgroundColor","orange");
		
		$("#foo8").show();
		$("#foo8").css("left", '400px');
		$("#foo8").css("top",'200px');
		$("#foo8").css("width",'50px');
		$("#foo8").css("height",'50px');
		$("#foo8").css("backgroundColor","navy");
		
		doMove();
		timer2 = setTimeout(function(){
			if(totalPopped ==8){
				//claim the winning
				$("#pBtn").html("You WIN!!");
			}else{
				//Claim lose the game
				$("#pBtn").html("You LOST!! Play Again");
			}
			//stop the game 
			clearTimeout(timer2);
			stopGame();
			totalPopped =0;
		}
		,15000)
	}
	
	function doMove(){
		if (totalTimes ++ > 300){
			if (flipflop ==0) flipflop =1;
			else flipflop =0;
			totalTimes =0;
		} 
		if((totalTimes % 50)==0){
			if(ChangeColor==1){
				$("#foo1").css("backgroundColor",colors[colorIdx]);
				colorIdx++;
				if(colorIdx >8) colorIdx =0;
				$("#foo2").css("backgroundColor",colors[colorIdx]);
				colorIdx++;
				if(colorIdx >8) colorIdx =0;
				$("#foo3").css("backgroundColor",colors[colorIdx]);
				colorIdx++;
				if(colorIdx >8) colorIdx =0;
				$("#foo4").css("backgroundColor",colors[colorIdx]);
				colorIdx++;
				if(colorIdx >8) colorIdx =0;
				$("#foo5").css("backgroundColor",colors[colorIdx]);
				colorIdx++;
				if(colorIdx >8) colorIdx =0;
				$("#foo6").css("backgroundColor",colors[colorIdx]);
				colorIdx++;
				if(colorIdx >8) colorIdx =0;
				$("#foo7").css("backgroundColor",colors[colorIdx]);
				colorIdx++;
				if(colorIdx >8) colorIdx =0;
				$("#foo8").css("backgroundColor",colors[colorIdx]);
				colorIdx++;
				if(colorIdx >8) colorIdx =0;
			}
		}
		if(flipflop ==0){ //Moving center to outter 
			$("#foo1").css("left", (parseInt ($("#foo1").css("left"))+1+'px'));
			$("#foo2").css("left", (parseInt ($("#foo2").css("left"))-1+'px'));
			$("#foo3").css("top", (parseInt ($("#foo3").css("top")) +1+'px'));
			$("#foo4").css("top", (parseInt ($("#foo4").css("top")) -1+'px'));
			//foo5 from center to top and right : top - left +
			$("#foo5").css("top", (parseInt ($("#foo5").css("top")) -1+'px'));
			$("#foo5").css("left", (parseInt ($("#foo5").css("left"))+1+'px'));
			//foo6 center to top and left top- left-
			$("#foo6").css("top", (parseInt ($("#foo6").css("top")) -1+'px'));
			$("#foo6").css("left", (parseInt ($("#foo6").css("left"))-1+'px'));
			//foo7 center to lower and right :top+ left +
			$("#foo7").css("top", (parseInt ($("#foo7").css("top"))+1+'px'));
			$("#foo7").css("left", (parseInt ($("#foo7").css("left"))+1+'px'));
			//foo8 center to lower and left: top + left -
			$("#foo8").css("top", (parseInt ($("#foo8").css("top"))+1+'px'));
			$("#foo8").css("left", (parseInt ($("#foo8").css("left"))-1+'px'));
			
			if(ChangeSize == 1){
				$("#foo1").css("width", (parseInt ($("#foo1").css("width"))+1+'px'));
				$("#foo1").css("height", (parseInt ($("#foo1").css("height"))+1+'px'));
				
				$("#foo2").css("width", (parseInt ($("#foo2").css("width"))+1+'px'));
				$("#foo2").css("height", (parseInt ($("#foo2").css("height"))+1+'px'));
				
				$("#foo3").css("width", (parseInt ($("#foo3").css("width"))+1+'px'));
				$("#foo3").css("height", (parseInt ($("#foo3").css("height"))+1+'px'));
				
				$("#foo4").css("width", (parseInt ($("#foo4").css("width"))+1+'px'));
				$("#foo4").css("height", (parseInt ($("#foo4").css("height"))+1+'px'));
				
				$("#foo5").css("width", (parseInt ($("#foo5").css("width"))+1+'px'));
				$("#foo5").css("height", (parseInt ($("#foo5").css("height"))+1+'px'));
				
				$("#foo6").css("width", (parseInt ($("#foo6").css("width"))+1+'px'));
				$("#foo6").css("height", (parseInt ($("#foo6").css("height"))+1+'px'));
				
				$("#foo7").css("width", (parseInt ($("#foo7").css("width"))+1+'px'));
				$("#foo7").css("height", (parseInt ($("#foo7").css("height"))+1+'px'));
				
				$("#foo8").css("width", (parseInt ($("#foo8").css("width"))+1+'px'));
				$("#foo8").css("height", (parseInt ($("#foo8").css("height"))+1+'px'));
			}
		} else {//moving from outter to center 
			$("#foo1").css("left", (parseInt ($("#foo1").css("left"))-1+'px'));
			$("#foo2").css("left", (parseInt ($("#foo2").css("left"))+1+'px'));
			$("#foo3").css("top", (parseInt ($("#foo3").css("top")) -1+'px'));
			$("#foo4").css("top", (parseInt ($("#foo4").css("top")) +1+'px'));
			//foo5 lower left 
			$("#foo5").css("top", (parseInt ($("#foo5").css("top")) +1+'px'));
			$("#foo5").css("left", (parseInt ($("#foo5").css("left"))-1+'px'));
			//foo6 lower right 
			$("#foo6").css("top", (parseInt ($("#foo6").css("top")) +1+'px'));
			$("#foo6").css("left", (parseInt ($("#foo6").css("left"))+1+'px'));
			//foo7 top left : top - left-
			$("#foo7").css("top", (parseInt ($("#foo7").css("top"))-1+'px'));
			$("#foo7").css("left", (parseInt ($("#foo7").css("left"))-1+'px'));
			//foo8 top right: top - left+
			$("#foo8").css("top", (parseInt ($("foo8").css("top"))-1+'px'));
			$("#foo8").css("left", (parseInt ($("#foo8").css("left"))+1+'px'));
			if(ChangeSize == 1){
				$("#foo1").css("width", (parseInt ($("#foo1").css("width"))-1+'px'));
				$("#foo1").css("height", (parseInt($("#foo1").css("height"))-1+'px'));
				
				$("#foo2").css("width", (parseInt ($("#foo2").css("width"))-1+'px'));
				$("#foo2").css("height", (parseInt($("#foo2").css("height"))-1+'px'));
				
				$("#foo3").css("width", (parseInt ($("#foo3").css("width"))-1+'px'));
				$("#foo3").css("height", (parseInt($("#foo3").css("height"))-1+'px'));
				
				$("#foo4").css("width", (parseInt ($("#foo4").css("width"))-1+'px'));
				$("#foo4").css("height", (parseInt($("#foo4").css("height"))-1+'px'));
				
				$("#foo5").css("width", (parseInt ($("#foo5").css("width"))-1+'px'));
				$("#foo5").css("height", (parseInt($("#foo5").css("height"))-1+'px'));
				
				$("#foo6").css("width", (parseInt ($("#foo6").css("width"))-1+'px'));
				$("#foo6").css("height", (parseInt($("#foo6").css("height"))-1+'px'));
				
				$("#foo7").css("width", (parseInt ($("#foo7").css("width"))-1+'px'));
				$("#foo7").css("height", (parseInt($("#foo7").css("height"))-1+'px'));
				
				$("#foo8").css("width", (parseInt ($("#foo8").css("width"))-1+'px'));
				$("#foo8").css("height", (parseInt($("#foo8").css("height"))-1+'px'));
			}
		}
		timer1 = setTimeout(doMove, 15);
	}
	
	function stopGame(){
		clearTimeout(timer1);
		ColorChange = 0;
		SizeChange = 0;
		totalTimes = 0;
		flipflop = 0;
		colorIdx = 0;
		$("#foo1").hide();
		$("#foo2").hide();
		$("#foo3").hide();
		$("#foo4").hide();
		$("#foo5").hide();
		$("#foo6").hide();
		$("#foo7").hide();	
		$("#foo8").hide();
	}
	
	function detectBrowser()
	{
	var browser=navigator.appName;
	var b_version=navigator.appVersion;
	var version=parseFloat(b_version);
	var b_infor=document.getElementById("bInfo");
	
	b_infor.innerHTML=("CodeName=" + navigator.appCodeName);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("MinorVersion=" + navigator.appMinorVersion);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("Name=" + navigator.appName);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("Version=" + navigator.appVersion);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("CookieEnabled=" + navigator.cookieEnabled);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("CPUClass=" + navigator.cpuClass);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("OnLine=" + navigator.onLine);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("Platform=" + navigator.platform);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("UA=" + navigator.userAgent);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("BrowserLanguage=" + navigator.browserLanguage);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("SystemLanguage=" + navigator.systemLanguage);
	b_infor.innerHTML+=("<br />");
	b_infor.innerHTML+=("UserLanguage=" + navigator.userLanguage);

	if ((browser=="Netscape"||browser=="Microsoft Internet Explorer")
		&& (version>=4))
		{
			alert("Your browser is good enough!");
		}
		else
		{
			alert("It's time to upgrade your browser!");
		}	
	}
	
});


