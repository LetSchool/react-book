var PHASE = [ '', 'CAPTURING', 'AT_TARGET', 'BUBBLING' ];

function clickedHandler(e) {
  var eventName = e.type,
      targetId = e.target.id,
      currentTargetId = e.currentTarget.id,
      phase = e.eventPhase,
      text = "Event: " + eventName + ", Source: " + targetId + "\n" +
             "Phase: " + PHASE[phase] + "\n" +
             "Handler Executed at: " + currentTargetId;
             
  alert(text);
}

var topDiv = document.getElementById('top'),
    middleDiv = document.getElementById('middle'),
    btn = document.getElementById('btn');

topDiv.addEventListener('click', clickedHandler, true);
middleDiv.addEventListener('click', clickedHandler, true);
btn.addEventListener('click', clickedHandler);
