/* write functions that define the action for each event */
function showTip () {
	var sidTip = document.getElementById("sidTip"); 		//obtain access to the HTML tool tip element using id "sidTip" and link it a varialbe named sidTip
	
	sidTip.style.display = "inline";  										//display the HTML tool tip element sidTip bying change the value of its CSS property "display" to "inline"
}

function hideTip() {
	var sidTip = document.getElementById("sidTip"); /* Get a reference to the tooltip element */
	sidTip.style.display = "none"; /* Set the display property to "none" to hide it */
  }
  
  function init() {
	var sid = document.getElementById("sid"); /* Get a reference to the User ID text box */
	sid.onmouseover = showTip; /* Call showTip() when the mouse hovers over the text box */
	sid.onmouseout = hideTip; /* Call hideTip() when the mouse leaves the text box */
  }
  
  window.onload = init; /* Call init() when the page loads completely */
  

																							/* link function init to the onload event of the window so that function init
																							
																							will be called when the page is loaded */
