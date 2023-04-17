// get a reference to the sms or call radio buttons
const totalSettingsElement = document.querySelector(".totalSettings");
const callTotalSettingsElement = document.querySelector(".callTotalSettings");
const smsTotalSettingsElement = document.querySelector(".smsTotalSettings");

// get refences to all the settings fields
const billItemTypeWithSettingsElement = document.querySelector(
  ".billItemTypeWithSettings"
);
const callCostSettingElement = document.querySelector(".callCostSetting");
const smsCostSettingElement = document.querySelector(".smsCostSetting");
const warningLevelSettingElement = document.querySelector(
  ".warningLevelSetting"
);
const criticalLevelSettingElement = document.querySelector(
  ".criticalLevelSetting"
);
//get a reference to the add button
const buttonElement = document.querySelector(".buttonAdd");

//get a reference to the 'Update settings' button
const updateSettingsElement = document.querySelector(".updateSettings");
// create a variables that will keep track of all the settings
var callCost = 0;
var smsCost = 0;
var warningLevel = 0;
var criticalLevel = 0;

// create a variables that will keep track of all three totals.
var callsTotalThree = 0;
var smsTotalThree = 0;
var totalsThree = 0;

function billItemTypeWithSettings() {
  //in the event listener get the value from the billItemTypeRadio radio buttons
  var checkedRadioBtn = document.querySelector(
    "input[name='billItemTypeWithSettings']:checked"
  );
  if (checkedRadioBtn) {
    var billItemType = checkedRadioBtn.value;
    if (totalsThree < criticalLevel) {
      if (billItemType === "sms") {
        smsTotalThree += smsCost;
      }
      if (billItemType === "call") {
        callsTotalThree += callCost;
      }
    }
    //console.log(callsTotalThree)
    totalsThree = callsTotalThree + smsTotalThree;

    updateLevels();

    callTotalSettingsElement.innerHTML = callsTotalThree.toFixed(2);
    smsTotalSettingsElement.innerHTML = smsTotalThree.toFixed(2);
    totalSettingsElement.innerHTML = totalsThree.toFixed(2);
  }
}

//add an event listener for when the 'Update settings' button is pressed
buttonElement.addEventListener("click", billItemTypeWithSettings);

function updateClicked() {
  callCost = Number(callCostSettingElement.value);
  smsCost = Number(smsCostSettingElement.value);
  criticalLevel = criticalLevelSettingElement.value;
  warningLevel = warningLevelSettingElement.value;

  updateLevels();
}

function updateLevels() {
  totalSettingsElement.classList.remove("warning");
  totalSettingsElement.classList.remove("danger");
  if (warningLevel > 0 && criticalLevel > 0) {
    if (totalsThree >= warningLevel && totalsThree < criticalLevel) {
      totalSettingsElement.classList.remove("warning");
      totalSettingsElement.classList.add("warning");
    }
    if (totalsThree >= criticalLevel) {
      totalSettingsElement.classList.remove("warning");
      totalSettingsElement.classList.add("danger");
    }
  }
}

updateSettingsElement.addEventListener("click", updateClicked);
//add an event listener for when the add button is pressed

// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
