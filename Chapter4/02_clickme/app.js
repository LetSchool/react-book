function clickedHandler() {
    alert("I'm the button click handler.");
}
var btn = document.getElementById('btn');
btn.onclick = clickedHandler;