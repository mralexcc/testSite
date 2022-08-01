let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mona-lisa.jpeg') {
      myImage.setAttribute('src','images/firefox2.png');
    } else {
      myImage.setAttribute('src','mona-lisa.jpeg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'You are a genius, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'You are a genius, ' + storedName;
}
myButton.onclick = function() {
  setUserName();
}

