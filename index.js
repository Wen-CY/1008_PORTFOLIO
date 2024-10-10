var addText = document.querySelector("h3");



setInterval(() => {window.clearInterval(mySetInterval);
    addText.innerText= "Hello, I'm Wen."},8000);

var mySetInterval = setInterval(() => 
addText.append("  Nice to meet you."),2000);
