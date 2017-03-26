function clickedHandler() {
    alert("I'm the button click handler.");
}

function clickedHandler2() {
    alert("I'm the other click handler.");
}

var btn = document.getElementById('btn');
btn.addEventListener('click', clickedHandler);
btn.addEventListener('click', clickedHandler2);
