var BBtn_state = 0;
var bbBtn_state = 0;
var sbBtn_state = 0;
var paBtn_state = 0;
$(document).ready(function(){
	$("#bGame").hide();
	$("#bbGame").hide();
	$("#sbGame").hide();
	//BBtn
	$("#BBtn").click(function(){
		if(BBtn_state == 0) {
			BBtn_state++;
			$("#BBtn").html("Hide Browser");
			$("#bGame").show(); //Show bGame
		}else {
			BBtn_state = 0;
			$("#BBtn").html("Browser Game");
			$("#bGame").hide();
		}
	})
	$("#logoutBtn").click(function(){
		Cookies.remove("YiShiangEmailCookie");
		Cookies.remove("YiShiangPasswordCookie");
		Cookies.remove("YiShiangLoginPassCookie");
		window.location.href="index.html";
	})
	
	
	
	// Build login and register functions here
	$("#registerBtn").click(function(){
		//Get user to prompt email and password and save them to cookies
		Cookies.set("YiShiangEmailCookie", prompt("Please enter your email:",""), {expire:1});
		Cookies.set("YiShiangPasswordCookie",$.md5(prompt("Please enter password:","")), {expire: 1});

	})
	$("#loginBtn").click(function(){
		// if inputEmail == Cooke(email) && inputPassword == Cookie(password) ->YiShiangloginpassCookie
	if(($("input[name=inputEmail]").val() == Cookies.get("YiShiangEmailCookie")) && ($.md5($("input[name=inputPassword]").val()) == Cookies.get("YiShiangPasswordCookie")))
	{
		Cookies.set("YiShiangLoginPassCookie", $.md5("234571"),{expire:1});
		window.location.href="game.html";
	}
	else{
		alert("Either email or password not match. Please Try Again.");
	}
	})
	//bbBtn
	$("#bbBtn").click(function(){
		if(bbBtn_state == 0) {
			bbBtn_state++;
			$("#bbBtn").html("Hide Bubble");
			$("#bbGame").show(); //Show bGame
		}else {
			bbBtn_state = 0;
			$("#bbBtn").html("Bubble Game");
			$("#bbGame").hide();
		}
	})
	
	//sbBtn
	$("#sbBtn").click(function(){
		if(sbBtn_state == 0) {
			sbBtn_state++;
			$("#sbBtn").html("Hide Spell");
			$("#sbGame").show(); //Show bGame
		}else {
			sbBtn_state = 0;
			$("#sbBtn").html("Spell Game");
			$("#sbGame").hide();
		}
	})
	
	//paBtn
		$("#paBtn").click(function(){
		if(paBtn_state == 0) {
			paBtn_state++;
			$("#paBtn").html("Hide All");
			$("#bGame").show(); //Show bGame
			$("#bbGame").show(); //Show bbGame
			$("#sbGame").show(); //Show sbGame
		}else {
			paBtn_state = 0;
			$("#paBtn").html("Play All");
			$("#bGame").hide();
			$("#bbGame").hide();
			$("#sbGame").hide();
		}
	})
	
	
	
	
	
})