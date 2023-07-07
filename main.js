let myImage = document.querySelector("img");

myImage.onclick = () => {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/IMG_7468.jpeg"){
        myImage.setAttribute("src", "images/IMG_7504.jpeg");         
    } else {
    myImage.setAttribute("src", "images/IMG_7468.jpeg");    
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    let myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.innerHTML = 'Visit Morocco, ' + myName;
}
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    let storedName = localStorage.getItem("name");
    myHeading.innerHTML = 'Visit Morocco,  ' +  storedName;
}
myButton.onclick = () => {
    setUserName();
}