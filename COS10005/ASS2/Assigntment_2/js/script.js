function regvalidate() {
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;

	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;
	var female = document.getElementById("other").checked;
	var email = document.getElementById("email").value;
	var icecream = document.getElementById("icecream").value;


	var errMsg = "";
	var result = true;

	if (username == "") {
		errMsg += "Username cannot be empty.\n";
	}
	if (password == "") {
		errMsg += "Password cannot be empty.\n";
	}
	else if (password.length < 9) {
		errMsg += "Password has to be at least 9 characters long.\n";
	}

	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}
	if ((!male) && (!female)&& (!other)) {
		errMsg += "A gender must be selected.\n";
	}
	if (icecream == "") {
		errMsg += "Please choose an icecream.\n";
	}

	if (errMsg != "") {
		alert(errMsg);
		result = false;
	}
	return result;
}




// function to validate order form 

function ordvalidate() {
	var delivery = document.getElementById("delivery").checked;
	var pickup = document.getElementById("pickup").checked;
	var deliadd = document.getElementById("delivery_address").value;
	var billadd = document.getElementById("billing_address").value;
	var contact = document.getElementById("phone_number").value;
	var email2 = document.getElementById("email_address").value;
	var paypickup = document.getElementById("cod").checked;
	var payonline = document.getElementById("credit").checked;
	var card = document.getElementById("card").value;
	var creditnum = document.getElementById("creditnum").value;
  var post = document.getElementById("post").value;
	var errMsg2 = "";
	var result2 = true;
	
	if ((!delivery) && (!pickup)) {
		errMsg2 += "Please select delivery or pickup.\n";
	}
	if (delivery) {
		if ((!deliadd)) {
			errMsg2 += "Please enter delivery address.\n";
		}
		if ((!billadd)){
			errMsg2 += "Please enter billing address.\n";
		}
		if(post.length<4){
			errMsg2 += "Postcode must be at least 4 number.\n"
		  }
	}

	if (contact == "") {
		errMsg2 += "Please enter your contact number.\n";
	}
	if (email2 == "") {
		errMsg2 += "Please enter your email for receipt.\n";
	}
	if ((!paypickup) && (!payonline)) {
		errMsg2 += "Please select a payment method.\n";
	}
	if (payonline) {
		if ((card == "") && (creditnum == "")) {
			errMsg2 += "Please select a type of card and credit card number.\n";
		}
		if (card == "visa" || card == "master") {
			if (creditnum.length != 16) {
				errMsg2 += "VISA or MasterCard must have 16 numbers.\n"
			}
		} else if (card == "american") {
			if (creditnum.length != 15) {
				errMsg2 += "American Express card must have 15 numbers.\n"
			}
		}
	}

	if (errMsg2 != "") {
		alert(errMsg2);
		result2 = false;
	}
  
	return result2; 
}
// enhancements function 

function init() {
	
	var regForm = document.getElementById("registerform");
	var ordForm = document.getElementById("orderform");
	if (regForm != null) {
		regForm.onsubmit = regvalidate;
	}
	if (ordForm != null) {
		ordForm.onsubmit = ordvalidate;
	}

}

//index cart


let stawberry= {
    name: "stawberry",
    price: 1.5,
    quanity: 1,
	id: 1
    }


    let vanila = {
    name: "vanila",
    price: 2.5,
    quanity: 1,
	id: 2
    }

    let chocolate = {
    name: "chocolate",
    price: 2.5,
    quanity: 1,
	id:3
    }

    let matcha = {
    name: "matcha",
    price: 3.0,
    quanity: 1,
	id: 4
    }

	
    function AddCart(name){
    
        if (name == stawberry.name){
			if(localStorage.getItem(stawberry.id)!=null)
			{
				//console.log(localStorage.getItem(stawberry.id));
				let obj = JSON.parse(localStorage.getItem(stawberry.id));
				obj.quanity++;
				localStorage.setItem(stawberry.id, JSON.stringify(obj));

				console.log(localStorage.getItem(stawberry.id));
			}
			else
			//console.log(localStorage.getItem(stawberry.id));
			
            localStorage.setItem(stawberry.id, JSON.stringify(stawberry));
			

			
        }

        
        if (name == vanila.name){
			if(localStorage.getItem(vanila.id)!=null)
			{
				//console.log(localStorage.getItem(stawberry.id));
				let obj = JSON.parse(localStorage.getItem(vanila.id));
				obj.quanity++;
				localStorage.setItem(vanila.id, JSON.stringify(obj));

				
			}
			else
            localStorage.setItem(vanila.id, JSON.stringify(vanila));
        
		}

        
        if (name == chocolate.name){
			if(localStorage.getItem(chocolate.id)!=null)
			{
				//console.log(localStorage.getItem(stawberry.id));
				let obj = JSON.parse(localStorage.getItem(chocolate.id));
				obj.quanity++;
				localStorage.setItem(chocolate.id, JSON.stringify(obj));

				console.log(localStorage.getItem(chocolate.id));
			}
			else
            localStorage.setItem(chocolate.id, JSON.stringify(chocolate));
        }

        
        if (name == matcha.name){
			if(localStorage.getItem(matcha.id)!=null)
			{
				//console.log(localStorage.getItem(stawberry.id));
				let obj = JSON.parse(localStorage.getItem(matcha.id));
				obj.quanity++;
				localStorage.setItem(matcha.id, JSON.stringify(obj));

				console.log(localStorage.getItem(matcha.id));
			}
			else
            localStorage.setItem(matcha.id, JSON.stringify(matcha));
        }
		window.location.reload();
	
    }
	
	const p = document.getElementById("cartshow");
    
	function ShowCart(){
		
		for (var i=1; i < 5; i++){
			var obj=JSON.parse(localStorage.getItem(i));
			if (obj!=null)
			{
				p.innerHTML+=`<li>Name: ${obj.name} Price: ${obj.price}$ Quanity: ${obj.quanity}</li>`;
			}

		//"Name:"+obj.name +" Price:"+ obj.price +" Quanity:"+ obj.quanity;
		}
		
		
	}

	function cartitem(){
		var span = document.getElementById("cart");
	
		var num =0;
		for (var i=1; i < 5; i++){
			var obj=JSON.parse(localStorage.getItem(i));
			if (obj!=null)
			{
				num+=Number(obj.quanity);
				console.log(num);
				span.innerText= num;
			}

		//"Name:"+obj.name +" Price:"+ obj.price +" Quanity:"+ obj.quanity;
		}
	}
	

	ShowCart();
	function clearcart(){
		localStorage.clear();
		window.location.reload();
	}

	
	
window.onload = init;
