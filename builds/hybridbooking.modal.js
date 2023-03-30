'use strict';
// document.body.innerHTML += '<div class="hybridbooking"></div>';
//Create the element using the createElement method.
// var btnOpen = document.createElement("button");
// btnOpen.id = 'myBtn';
// btnOpen.innerHTML = 'Open Modal';
// document.body.appendChild(btnOpen);

// create style element

var style = document.createElement("style");
style.innerHTML = "\n  /* The Modal (background) */\n  .hybridbooking-modal {\n    display: block; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n  }\n\n  .fadeIn {\n    -webkit-animation-name: fadeIn; /* Fade in the background */\n    -webkit-animation-duration: 0.4s;\n    animation-name: fadeIn;\n    animation-duration: 0.4s\n  }\n\n  .fadeOut {\n    -webkit-animation-name: fadeOut; /* Fade out the background */\n    -webkit-animation-duration: 0.4s;\n    animation-name: fadeOut;\n    animation-duration: 0.4s\n  }\n  \n  /* Modal Content */\n  @media only screen and (max-width: 912px) {\n    .hybridbooking-modal-content {\n      width: 100% !important;\n      margin: 0px !important;\n    }\n  }\n\n  .hybridbooking-modal-content {\n    position: fixed;\n    top: 0;\n    right: 0;\n    margin: 3px;\n    background-color: #fefefe;\n    width: 70%;\n    height: auto;\n    border-radius: 10px;\n  }\n\n  .slideIn {\n    -webkit-animation-name: slideIn;\n    -webkit-animation-duration: 0.4s;\n    animation-name: slideIn;\n    animation-duration: 0.4s;\n  }\n\n  .slideOut {\n    -webkit-animation-name: slideOut;\n    -webkit-animation-duration: 0.4s;\n    animation-name: slideOut;\n    animation-duration: 0.4s;\n  }\n  \n  /* The Close Button */\n  .hybridbooking-close {\n    position: relative;\n    right: 10px;\n    top: -3px;\n    color: lightgray;\n    float: right;\n    font-size: 28px;\n    font-weight: bold;\n  }\n  \n  .hybridbooking-close:hover,\n  .hybridbooking-close:focus {\n    color: red;\n    text-decoration: none;\n    cursor: pointer;\n  }\n  \n  .hybridbooking-modal-header {\n    padding: 2px 16px;\n  }\n  \n  .hybridbooking-modal-body {padding: 2px 16px;}\n  \n  .hybridbooking-modal-footer {\n    padding: 2px 16px;\n  }\n  \n  /* Add Animation */\n  @-webkit-keyframes slideIn {\n    from {right: -300px; opacity: 0} \n    to {right: 0; opacity: 1}\n  }\n  \n  @keyframes slideIn {\n    from {right: -300px; opacity: 0}\n    to {right: 0; opacity: 1}\n  }\n  \n  @-webkit-keyframes fadeIn {\n    from {opacity: 0} \n    to {opacity: 1}\n  }\n  \n  @keyframes fadeIn {\n    from {opacity: 0} \n    to {opacity: 1}\n  }\n\n  /*slide out*/\n  @-webkit-keyframes slideOut {\n    from {left: -300px; opacity: 1} \n    to {left: 0; opacity: 0}\n  }\n  \n  @keyframes slideOut {\n    from {left: -300px; opacity: 1}\n    to {left: 0; opacity: 0}\n  }\n  \n  @-webkit-keyframes fadeOut{\n    from {opacity: 0} \n    to {opacity: 1}\n  }\n  \n  @keyframes fadeOut {\n    from {opacity: 0} \n    to {opacity: 1}\n  }\n";
document.head.appendChild(style);
// end style element

var div = document.createElement("div");
//Set its unique ID.
div.id = 'hybridBookingModal';
div.className = 'hybridbooking-modal fadeIn';
//Add your content to the DIV
div.innerHTML = "\n  <div class=\"hybridbooking-modal-content slideIn\" id=\"hybridbooking-modal-content\">\n    <span class=\"hybridbooking-close\">&times;</span>\n    </br>\n    <div id=\"hybridbooking\"></div>\n  </div>\n";
//Finally, append the element to the HTML body
document.body.appendChild(div);

// add script element
var script = document.createElement('script');
script.src = 'builds/hybridbooking.main.js';
document.body.appendChild(script);
// add calendar
var calendar = document.createElement('script');
calendar.src = 'builds/components/calendar.js';
document.body.appendChild(calendar);
// add crypto
var mcrypto = document.createElement('script');
mcrypto.src = 'builds/components/mcrypto.js';
document.body.appendChild(mcrypto);

// Get the modal
var modal = document.getElementById("hybridBookingModal");
// Get the button that opens the modal
var btn = document.getElementById("openHybridModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("hybridbooking-close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function () {
  modal.setAttribute('class', 'hybridbooking-modal fadeOut');
  // document.getElementById("hybridbooking-modal-content").setAttribute('class',"hybridbooking-modal-content slideOut");
  modal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.setAttribute('class', 'hybridbooking-modal fadeIn');
  // document.getElementById("hybridbooking-modal-content").setAttribute('class',"hybridbooking-modal-content slideIn");
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.setAttribute('class', 'hybridbooking-modal fadeIn');
    // document.getElementById("hybridbooking-modal-content").setAttribute('class',"hybridbooking-modal-content slideIn");
    modal.style.display = "none";
  }
};