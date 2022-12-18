// javascript__basic
let text = ['Array.from', 'map', 'Math.trulc', 'substr', 'split', 'Math.ceil', 'Math.floor', 'Math.sqrt', 'replace', 'repeat', 'match', 'reduce', 'splice', 'filter'];
let index = 0;

function changeText() {
    document.getElementById("basic__method").innerText = text[index];
    index = (index + 1) % 14;
}

let interval = window.setInterval(changeText, 1000)
window.onunload = function () {
    window.clearInterval(interval);
}



// javascript__basic
let text2 = ['now?', 'me', 'contact'];
let index2 = 0;

function changeText() {
    document.getElementById("contact__title").innerText = text2[index];
    index = (index + 1) % 3;
}

let interval2 = window.setInterval(changeText, 1000)
window.onunload = function () {
    window.clearInterval(interval);
}