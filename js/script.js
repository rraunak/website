/**
 * @author Raunak <rraunak@asu.edu>
 */
(function ($) {
    "use strict";
      $('.sakura-falling').sakura();
})(jQuery);

// Get the "No" button element
const noButton = document.getElementById("no-button");

// Add a mouseover event listener to move the "No" button randomly
noButton.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);

  // Restrict the "No" button's movement within the bounds of the screen
  const buttonWidth = noButton.offsetWidth;
  const buttonHeight = noButton.offsetHeight;
  const maxX = window.innerWidth - buttonWidth;
  const maxY = window.innerHeight - buttonHeight;
  const adjustedX = x < maxX ? x : maxX;
  const adjustedY = y < maxY ? y : maxY;

  // Apply the new position to the button
  noButton.style.position = "absolute";
  noButton.style.left = `${adjustedX}px`;
  noButton.style.top = `${adjustedY}px`;
});

// Get the "Yes" button element
const yesButton = document.getElementById("yes-button");

// Add a click event listener to create confetti
yesButton.addEventListener("click", () => {

var confettiElement = document.getElementById('confetti-canvas');
var confettiSettings = { target: confettiElement, max: 729, size: 1, animate: true, props: ['circle', 'square', 'triangle', 'line'], colors: [[165,104,246],[230,61,135],[0,199,228],[253,214,126]], clock: 25, rotate: true,start_from_edge: true, respawn: true };

yesButton.style.display = "none";
noButton.style.display = "none";

var gif = document.getElementById("gif");
var header = document.getElementById("main");
header.style.display = "none";
gif.style.display = "none";

//change the style of the confetti canvas
confettiElement.style.position = "absolute";
confettiElement.style.top = "0";
confettiElement.style.left = "0";
confettiElement.style.width = "100%";
confettiElement.style.height = "100%";
confettiElement.style.zIndex = "1000";


var confetti = new ConfettiGenerator(confettiSettings);

confetti.render();

 let p = document.createElement("p");
 p.innerText = "Congrats you made the right choice 🎉 \nLet's decide the time and meet at the venue 😉";
  p.style.fontfamily = "Dancing Script"
  p.style.color = "#674ea7"
  p.style.fontSize = "2rem";
  p.style.fontWeight = "bold";
  p.style.textAlign = "center";
  p.style.position = "absolute";
  p.style.top = "50%";
  p.style.left = "50%";
  p.style.transform = "translate(-50%, -50%)";
  document.body.appendChild(p);
});


/**
 *
 * Despite so many new Bollywood and English song options, I prefered to use two-decade-old song, Din Shagna Da!
 *
 * Ever attended a North Indian Wedding? As soon as the DJ plays Din Shagna Da song, it means that the much-awaited moment is here
 * and the bride is all set to put her first foot forward to the wedding venue under a breathtaking phoolon ki chaadar.
 * Let's keep the sky-high status of this song untouched!
 *
 * When the website is backed up with a soul-stirring track, the feeling becomes absolutely surreal. 
 * Choose a heart-touching track! 🎵 ❤️
 *
 * Listen here: https://youtu.be/X0MDALpV29s
 *
 */
$(document).on('click', function(){
    document.getElementById("my_audio").play();
    console.log('Shaadi me zaroor aana');
});

// Set the date we're counting down to
var countDownDate = new Date("Nov 29, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get todays date and time
    var now = new Date().getTime();
    
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
    
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Output the result in an element with id="demo"
    document.getElementById("time").innerHTML = "<div class='container'><div class='days block'>"+ days + "<br>Days</div>" + "<div class='hours block'>" + hours + "<br>Hours</div>" + "<div class='minutes block'>" + minutes + "<br>Minutes</div>" + "<div class='seconds block'>" + seconds + "<br>Seconds</div></div>";
    
    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("time").innerHTML = "Bless the married couple for happy life!";
    }
}, 1000);

// being a bit cool :p  
var styles = [
    'background: linear-gradient(#D33106, #571402)'
    , 'border: 4px solid #3E0E02'
    , 'color: white'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)'
    , 'box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset'
    , 'line-height: 40px'
    , 'text-align: center'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles1 = [
    'color: #FF6C37'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');

var styles2 = [
    'color: teal'
    , 'display: block'
    , 'text-shadow: 0 2px 0 rgba(0, 0, 0, 1)'
    , 'line-height: 40px'
    , 'font-weight: bold'
    , 'font-size: 32px'
].join(';');