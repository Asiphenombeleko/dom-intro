const billItemTypeRadioElement = document.querySelector(".billItemTypeRadio");
const radioBillAddBtnElement = document.querySelector(".radioBillAddBtn");
const callTotalTwoElement = document.querySelector(".callTotalTwo");
const smsTotalTwoElement = document.querySelector(".smsTotalTwo");
const totalTwoElement = document.querySelector(".totalTwo");

var smsTotalTwo = 0;
var callsTotalTwo = 0;
var  totalCostTwo = 0;
function billItemTypeRadio() {

  var checkedRadioBtn = document.querySelector(
    "input[name='billItemType']:checked"
  );
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;

    if (billItemType === "call") {
      callsTotalTwo += 2.75;
    } else if (billItemType === "sms") {
      smsTotalTwo += 0.75;
    }
    totalCostTwo= callsTotalTwo + smsTotalTwo;
    if (totalCostTwo >= 30 && totalCostTwo < 50) {
      totalTwoElement.classList.add("warning");
    } else if (totalCostTwo >= 50) {
      totalTwoElement.classList.remove("warning");
      totalTwoElement.classList.add("danger");
    }

    callTotalTwoElement.innerHTML = callsTotalTwo.toFixed(2);
    smsTotalTwoElement.innerHTML = smsTotalTwo.toFixed(2);
    totalTwoElement.innerHTML = totalCostTwo.toFixed(2);
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
