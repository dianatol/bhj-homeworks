const element = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');

let clickCount = 0;
let large = false;


element.onclick = function() {
    clickCount++;
    counter.textContent = clickCount;

    if (large) {
    element.width = 150;
    element.height = 150;    
    } else {
    element.width = 250;
    element.height = 250;
    }

    large = !large;
};

