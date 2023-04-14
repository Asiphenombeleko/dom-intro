const billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const totalTwoElement = document.querySelector(".totalTwo");



function billItemTypeRadio() {

  var checkedRadioBtn = document.querySelector(
    "input[name='billItemType']:checked"
  );
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;

    if (billItemType === "call") {
      callsTotal += 2.75;
    } else if (billItemType === "sms") {
      smsTotal += 0.75;
    }
    totalCost = callsTotal + smsTotal;
    if (totalCost >= 30 && totalCost < 50) {
      totalTwoElement.classList.add("warning");
    } else if (totalCost >= 50) {
      totalTwoElement.classList.remove("warning");
      totalTwoElement.classList.add("danger");
    }

    callTotalTwoElement.innerHTML = callsTotal.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotal.toFixed(2);
    totalTwoElement.innerHTML = totalCost.toFixed(2);
  }
}

radioBillAddBtnElement.addEventListener("click", billItemTypeRadio);
// get a reference to the sms or call radio buttons

//get a reference to the add button

//create a variable that will keep track of the total bill

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the running total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen
