function calculateBtnClicked() {
  var billStringElement = document.querySelector(".billString").value;
  const totalElement = document.querySelector(".billTotal");

  var billStrings = billStringElement.split(",");

  var billTotal = 0;

  for (var i = 0; i < billStrings.length; i++) {
    var total = billStrings[i].trim();
    if (total == "sms") {
      billTotal += 0.75;
    } else if (total == "call") {
      billTotal += 2.75;
    }
  }
  if(billTotal >=20 && billTotal < 30){
    totalElement.classList.add("warning")

  }

  else if(billTotal >=30){
    totalElement.classList.remove("warning")
   totalElement.classList.add("danger")

  }
  else {
    totalElement.classList.remove("warning");
    totalElement.classList.add("black");
  }
  totalElement.innerHTML = billTotal.toFixed(2);

  
}



const calculateBtnElement = document.querySelector(".calculateBtn");

calculateBtnElement.addEventListener("click", calculateBtnClicked());
