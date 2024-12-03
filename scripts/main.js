var myHeading = document.querySelector("h1");
var myButton = document.querySelector("button");
myHeading.textContent = "Hello world!";
/*ЭТО 
МНОГОСТРОЧНЫЙ 
КОМЕННТАРИЙ*/
//иЗОБРАЖЕНИЕ
var myImage = document.querySelector("img");
myImage.onclick = function () {
	var mySrc = myImage.getAttribute("src");
	if (mySrc === "images/123.jpg") {
	    myImage.setAttribute("src", "images/456.jpg");
	  } else {
	    myImage.setAttribute("src", "images/123.jpg");
	  }
	};

function setUserName() {
	var myName=prompt ("Please enter your name.");
	localStorage.setItem("name", myName);
	myHeading.textContent = "Hello, " + myName;
}

myButton.onclick = function () {
	setUserName();
}

if (localStorage.getItem("name")) {

  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla is cool, " + storedName;
}