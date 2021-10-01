function hello() {
	document.getElementById("input").style.fontSize = "24pt";
}

function fancy() {
	alert("Now on Fancy");
	document.getElementById("input").style.fontWeight = "bold";
	document.getElementById("input").style.color = "blue";
	document.getElementById("input").style.textDecoration = "underline";
}

function boring() {
	alert("Now on Boring");
	document.getElementById("input").style.fontWeight = "normal";
    document.getElementById("input").style.color = "black";
	document.getElementById("input").style.textDecoration = "none";
}

function moo(){
	var inputVal = document.getElementById("input").value;
	inputVal = inputVal.toUpperCase();
	var parts = inputVal.split(".");
	inputVal = parts.join("-Moo.");
	document.getElementById("input").value = inputVal;
}

