var stepWidth = 20;
var stepHeight = 20;

var xPos = 0;
var yPos = 0;

window.addEventListener("keydown", function(event) {
  Move(event);
});

function Move(event){
    var xOffset = 0;
    var yOffset = 0;
    switch(event.code) {
    case "KeyS":
    case "ArrowDown":
        yPos -= stepHeight;
    break;
    case "KeyW":
    case "ArrowUp":
        yPos += stepHeight;
    break;
    case "KeyA":
    case "ArrowLeft":
        xPos += stepWidth;
    break;
    case "KeyD":
    case "ArrowRight":
        xPos -= stepWidth;
    break;
    }

    console.log("Key pressed " + event.code);

    var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
    });

    // Add children
    tl
    .add({
        targets: '#TestTile',
        translateX : xPos,
        translateY : yPos
    });
}