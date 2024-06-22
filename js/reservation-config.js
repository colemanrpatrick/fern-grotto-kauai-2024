 //to do: incorperate this parameter into cartData (see sealifeparkluau.com for example)
let highlightData = {}
 
const securityImgSrc = "images/shieldlock.svg";

let checkoutButtonA = document.getElementById("product-button");

checkoutButtonA.onclick = () => {
     setDatepickerKey();
     setReservationWindow();
}