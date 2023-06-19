'use strict';
// document.body.innerHTML += '<div class="hybridbooking"></div>';
//Create the element using the createElement method.
// var btnOpen = document.createElement("button");
// btnOpen.id = 'myBtn';
// btnOpen.innerHTML = 'Open Modal';
// document.body.appendChild(btnOpen);

function getScriptJS(link) {
  let x = document.createElement("script");
  x.setAttribute("type", "text/javascript");
  x.setAttribute("src", link);
  document.head.appendChild(x);
}

function getScriptStyle(link) {
  let x = document.createElement("link");
  x.setAttribute("rel", "stylesheet");
  x.setAttribute("type", "text/css");
  x.setAttribute("href", link);
  document.head.appendChild(x);
}
// create style element
var style = document.createElement("style");
style.innerHTML = `
  /* The Modal (background) */
  .hybridbooking-modal {
    display: block; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
  }

  .fadeIn {
    -webkit-animation-name: fadeIn; /* Fade in the background */
    -webkit-animation-duration: 0.4s;
    animation-name: fadeIn;
    animation-duration: 0.4s
  }

  .fadeOut {
    -webkit-animation-name: fadeOut; /* Fade out the background */
    -webkit-animation-duration: 0.4s;
    animation-name: fadeOut;
    animation-duration: 0.4s
  }
  
  /* Modal Content */
  @media only screen and (max-width: 912px) {
    .hybridbooking-modal-content {
      width: 100% !important;
      margin: 0px !important;
    }
  }

  .hybridbooking-modal-content {
    position: fixed;
    top: 0;
    right: 0;
    margin: 3px;
    background-color: #fefefe;
    width: 70%;
    height: auto;
    border-radius: 10px;
  }

  .slideIn {
    -webkit-animation-name: slideIn;
    -webkit-animation-duration: 0.4s;
    animation-name: slideIn;
    animation-duration: 0.4s;
  }

  .slideOut {
    -webkit-animation-name: slideOut;
    -webkit-animation-duration: 0.4s;
    animation-name: slideOut;
    animation-duration: 0.4s;
  }
  
  /* The Close Button */
  .hybridbooking-close {
    position: relative;
    right: 10px;
    top: -3px;
    color: lightgray;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .hybridbooking-close:hover,
  .hybridbooking-close:focus {
    color: red;
    text-decoration: none;
    cursor: pointer;
  }
  
  .hybridbooking-modal-header {
    padding: 2px 16px;
  }
  
  .hybridbooking-modal-body {padding: 2px 16px;}
  
  .hybridbooking-modal-footer {
    padding: 2px 16px;
  }
  
  /* Add Animation */
  @-webkit-keyframes slideIn {
    from {right: -300px; opacity: 0} 
    to {right: 0; opacity: 1}
  }
  
  @keyframes slideIn {
    from {right: -300px; opacity: 0}
    to {right: 0; opacity: 1}
  }
  
  @-webkit-keyframes fadeIn {
    from {opacity: 0} 
    to {opacity: 1}
  }
  
  @keyframes fadeIn {
    from {opacity: 0} 
    to {opacity: 1}
  }

  /*slide out*/
  @-webkit-keyframes slideOut {
    from {left: -300px; opacity: 1} 
    to {left: 0; opacity: 0}
  }
  
  @keyframes slideOut {
    from {left: -300px; opacity: 1}
    to {left: 0; opacity: 0}
  }
  
  @-webkit-keyframes fadeOut{
    from {opacity: 0} 
    to {opacity: 1}
  }
  
  @keyframes fadeOut {
    from {opacity: 0} 
    to {opacity: 1}
  }
`;
document.head.appendChild(style);
// end style element

var div = document.createElement("div");
//Set its unique ID.
div.id = 'hybridBookingModal';
div.className = 'hybridbooking-modal fadeIn';
//Add your content to the DIV
div.innerHTML = `
  <div class="hybridbooking-modal-content slideIn" id="hybridbooking-modal-content">
    <span class="hybridbooking-close">&times;</span>
    </br>
    <div id="hybridbooking">
      <div class="hybridbooking-modal-header">
        <div class="w-full py-6">
          <div class="flex">
            <div id="step1">
              <div class="w-1/4">
                <div class="relative mb-2">
                  <div class="w-8 h-8 mx-auto bg-red-500 rounded-full text-md text-white flex items-center">
                    <span class="text-center text-white w-full">1</span>
                  </div>
                </div>
                <div class="text-ms text-center">Products</div>
              </div>
            </div>
            // step 2
            <div id="step2">
              <div class="w-1/4">
                <div class="relative mb-2">
                  <div class="absolute flex align-center items-center align-middle content-center" style={lineStep}>
                    <div class="w-full bg-gray-200 rounded items-center align-middle align-center flex-1">
                      <div class="w-0 bg-red-300 h-1 rounded" style={lineActive}></div>
                    </div>
                  </div>

                  <div class={classIcon}>
                    <span class="text-center w-full text-white">{number}</span>
                  </div>
                </div>
                <div class="text-ms text-center">{text}</div>
              </div>
            </div>
            // step 3
            <div id="step3"></div>
            // step 4
            <div id="step4"></div>
            <Step234 activeLine={false} number="2" text="Detail & Contact"/>
            <Step234 activeLine={false} number="3" text="Payment"/>
            <Step234 activeLine={false} number="4" text="Finish"/>
          </div>
        </div>
      </div>
      // modal body
      <div class="h-screen overflow-y-auto">
        // <Calendar data={data}/>
      </div>
    </div>
  </div>
`;
//Finally, append the element to the HTML body
document.body.appendChild(div);

// add script element
getScriptJS('src/hybridbooking.main.js')
// var script = document.createElement('script');
// script.src = 'src/hybridbooking.main.js';
// document.body.appendChild(script);
// add calendar
// getScriptJS('src/components/calendar.js')
// var calendar = document.createElement('script');
// calendar.src = 'src/components/calendar.js';
// document.body.appendChild(calendar);
// add crypto
// var mcrypto = document.createElement('script');
// mcrypto.src = 'builds/components/mcrypto.js';
// document.body.appendChild(mcrypto);

// Get the modal
var modal = document.getElementById("hybridBookingModal");
// Get the button that opens the modal
var btn = document.getElementById("openHybridModal");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("hybridbooking-close")[0];
// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.setAttribute('class','hybridbooking-modal fadeOut');
  // document.getElementById("hybridbooking-modal-content").setAttribute('class',"hybridbooking-modal-content slideOut");
  modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.setAttribute('class','hybridbooking-modal fadeIn');
  // document.getElementById("hybridbooking-modal-content").setAttribute('class',"hybridbooking-modal-content slideIn");
  modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.setAttribute('class','hybridbooking-modal fadeIn');
    // document.getElementById("hybridbooking-modal-content").setAttribute('class',"hybridbooking-modal-content slideIn");
    modal.style.display = "none";
  }
}