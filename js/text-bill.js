var billTypeTextElement = document.querySelector(".billTypeText");
const callTotalOneElement = document.querySelector(".callTotalOne");
const smsTotalOneElement = document.querySelector(".smsTotalOne");
const totalOneElement = document.querySelector(".totalOne");
const addToBillBtnElement = document.querySelector(".addToBillBtn");

var callsTotal = 0;
var smsTotal = 0;
var totalCost = 0;
function textBillTotal() {
  var billTypeEntered = billTypeTextElement.value;


  if (billTypeEntered === "call") {
    callsTotal += 2.75;
  } 
  
  else if (billTypeEntered === "sms") {
    smsTotal += 0.75;
  }
  totalCost = callsTotal + smsTotal;

  if (totalCost >= 30 && totalCost < 50) {
    totalOneElement.classList.add("warning");
  }
  if (totalCost >= 50) {
    totalOneElement.classList.remove("warning");
    totalOneElement.classList.add("danger");
  }

  callTotalOneElement.innerHTML = callsTotal.toFixed(2);
  smsTotalOneElement.innerHTML = smsTotal.toFixed(2);
 
  totalOneElement.innerHTML = totalCost.toFixed(2);
}

addToBillBtnElement.addEventListener("click", textBillTotal);

// get a reference to the textbox where the bill type is to be entered

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener check if the value in the bill type textbox is 'sms' or 'call'
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
