import { vehicles } from "./vehicleData.js";

let vehicleNumber = 0; //user input number of vehicle
let rentalDays = 0; // user inputer number of rental days
let totalPrice = 0;

const query = new URLSearchParams(window.location.search);
const vehicleID = query.get("vehicleID");

const userChoiceVehicle = vehicles.find((vehicle) => {
  return vehicle.vehicleID == vehicleID;
});

const vehicleName = userChoiceVehicle.name;
const price = userChoiceVehicle.price;
const actualPrice = userChoiceVehicle.actualPrice;
const discount = userChoiceVehicle.discount;
const image = userChoiceVehicle.image;
const ownerShip = userChoiceVehicle.ownerShip;
const vehicleType = userChoiceVehicle.vehicleType;
const totalvehicle = userChoiceVehicle.totalvehicle;

const rentDetail = document.querySelector(".rentDetail");

// Vehicle card container
const vehicleCard = document.createElement("div");
vehicleCard.className = "vehicle-card";

// Vehicle image
const img = document.createElement("img");
img.className = "vehicle-img";
img.src = image;
img.alt = vehicleName;
vehicleCard.appendChild(img);

// Info container
const vehicleInfo = document.createElement("div");
vehicleInfo.className = "vehicle-info";

// Title
const title = document.createElement("h2");
title.className = "vehicle-title";
title.textContent = vehicleName;
vehicleInfo.appendChild(title);

// Ownership line
const owner = document.createElement("p");
owner.className = "vehicle-owner";
owner.textContent = `Ownership : ${ownerShip} | ${vehicleType}`;
vehicleInfo.appendChild(owner);

// Pricing
const priceWrapper = document.createElement("div");
priceWrapper.className = "price";

const newPrice = document.createElement("span");
newPrice.className = "new-price";
newPrice.textContent = ` ${price}`;

const oldPrice = document.createElement("span");
oldPrice.className = "old-price";
oldPrice.textContent = ` ${actualPrice}`;

const discountEl = document.createElement("span");
discountEl.className = "discount";
discountEl.textContent = `-${discount}`;

priceWrapper.append(newPrice, oldPrice, discountEl);
vehicleInfo.appendChild(priceWrapper);

// Available vehicles
const available = document.createElement("p");
available.className = "available";
available.innerHTML = `Available vehicles: <strong>${totalvehicle}</strong>`;
vehicleInfo.appendChild(available);

// Form section
const formSection = document.createElement("div");
formSection.className = "form-section";

// Vehicle No. input group
const vehicleGroup = document.createElement("div");
vehicleGroup.className = "vh-with-msg";
vehicleGroup.innerHTML = `<div class = "input-group" ><label>Vehicle No.:</label>
  <div class="counter">
    <button onclick = "decreaseVal()" >-</button>
    <input type="number" id="vechicleNum" value="0" min="0"  required/>
    <button onclick="increaseVal()" >+</button>
  </div>
  <div class = "hidden">Rental request  exceeds available number</div>
   </div>`;
formSection.appendChild(vehicleGroup);

// Rental Days input group
const daysGroup = document.createElement("div");
daysGroup.className = "input-group";
daysGroup.innerHTML = `<label>Rental Days:</label>
  <div class="counter">
    <button onclick= " decreaseDays()">-</button>
    <input type="number" value="0" id="rentalDays"  min = "0" required/>
    <button onclick= " increaseDays()">+</button>
  </div>`;
formSection.appendChild(daysGroup);

// Rental Schedule
const schedule = document.createElement("div");
schedule.className = "schedule";
schedule.innerHTML = `
  <strong>Rental Schedule</strong>
   <div class = " date" >
  <div class = " from" >
  <label for= "from" > From: </label>
  <input type = "date" id = "from"  required>
  </div>
   <div class = "to" >
  <label for= "to" > To: </label>
  <input type = "date" id = "to"  required> 
  </div>
  </div>
  
`;
formSection.appendChild(schedule);

// Append everything
vehicleInfo.appendChild(formSection);
vehicleCard.appendChild(vehicleInfo);
rentDetail.appendChild(vehicleCard);

// Footer section
const footer = document.createElement("div");
footer.className = "footer";

const totalText = document.createElement("div");
totalText.className = "priceCalc";
totalText.textContent = `Total price:Rs.${totalPrice} `;

const btnGroup = document.createElement("div");
btnGroup.className = "btn-group";

const addToCart = document.createElement("button");
addToCart.className = "btn";
addToCart.id = "addcart";
addToCart.textContent = "ADD TO CART";

const rentNow = document.createElement("button");
rentNow.setAttribute("onclick", "trigerConfirmationScreen()");
rentNow.className = "btn";
rentNow.id = "rentNow";
rentNow.textContent = "RENT NOW";
console.log(rentNow);

// information for confirmation page

const containerOfConfirm = document.createElement("div");
containerOfConfirm.className = "containerOfConfirm";
const confirmPage = document.createElement("div");
confirmPage.className = "confirmation_page";

const confirmTag = document.createElement("h3");
confirmTag.textContent = "Rental Confirmation";
confirmPage.appendChild(confirmTag);

//img div
const dubimg = document.createElement("img");
dubimg.className = "dub-img";
dubimg.src = image;
dubimg.alt = vehicleName;
confirmPage.appendChild(dubimg);

//price div
const cnPrice = document.createElement("div");
cnPrice.className = "cnPrice";
cnPrice.textContent = `Rent: ${price}`;
confirmPage.appendChild(cnPrice);

//group of number of vehicle and days
const collOfuserInfo = document.createElement("div");
collOfuserInfo.className = "collOfuserInfo";

const rentedVhNum = document.createElement("div");
rentedVhNum.className = "rentedVhNum";
rentedVhNum.textContent = ``;

const rentedVhDays = document.createElement("div");
rentedVhDays.className = "rentedVhDays";
rentedVhDays.textContent = ``;

collOfuserInfo.append(rentedVhNum, rentedVhDays);
confirmPage.appendChild(collOfuserInfo);

//group of dates

function readToDate() {
  const toDate = document.querySelector("#to").value;
  return toDate;
}

function readFromDate() {
  const fromDate = document.querySelector("#from").value;
  return fromDate;
}

const rentStDate = document.createElement("div");
rentStDate.className = "rentStDate";
rentStDate.textContent = ``;
confirmPage.appendChild(rentStDate);

const rentEnDate = document.createElement("div");
rentEnDate.className = "rentEnDate";
rentEnDate.textContent = ``;
const grpDate = document.createElement("div");
grpDate.className = "grpDate";
grpDate.append(rentStDate, rentEnDate);
confirmPage.appendChild(grpDate);

//div of total payable amount
const finaPrice = document.createElement("div");
finaPrice.className = "finalPrice";
finaPrice.textContent = ``;
confirmPage.appendChild(finaPrice);

//group of the cancel and confirm button
const btnCll = document.createElement("div");
btnCll.className = "btnCollect";

const confirmBtn = document.createElement("button");
confirmBtn.className = "confirmBtn";
confirmBtn.textContent = "Confirm";

const cancelBtn = document.createElement("button");
cancelBtn.className = "cancelBtn";
cancelBtn.textContent = "Cancel";

const msgBox = document.createElement("div");
msgBox.className = "msgBox";
msgBox.id = "msgBox";
msgBox.innerHTML = `<img src="../Assests/tickanimation.gif">
  <span>Rental Booking Confirmed!</span>`;

btnCll.append(cancelBtn, confirmBtn);
confirmPage.appendChild(btnCll);
containerOfConfirm.append(confirmPage);

btnGroup.append(addToCart, rentNow);
footer.append(totalText, btnGroup, containerOfConfirm, msgBox);
rentDetail.appendChild(footer);

// to change the ip vehicle number value through the increase and decrease button

function increaseVal() {
  const input = document.querySelector("#vechicleNum");
  let currentValue = parseInt(input.value) || 0;
  if (currentValue < totalvehicle) {
    input.value = vehicleNumber = currentValue + 1;
  }
  calcPrice();
  // vehicleCount();
}

function decreaseVal() {
  const input = document.querySelector("#vechicleNum");
  let currentValue = parseInt(input.value) || 0;

  if (currentValue > 0) {
    input.value = vehicleNumber = currentValue - 1;
  }
  calcPrice();
  // vehicleCount();
}

document.addEventListener("DOMContentLoaded", () => {
  // to triger the function when the page content is loaded
  setupRentalListeners();
});

function setupRentalListeners() {
  const rentalDaysInput = document.querySelector("#rentalDays");
  const fromInput = document.querySelector("#from");

  // Update rentalDays variable when input is manually changed
  rentalDaysInput.addEventListener("input", () => {
    rentalDays = parseInt(rentalDaysInput.value) || 0;
    updateToDate();
  });

  // Update "to" date when "from" date is selected
  fromInput.addEventListener("blur", () => {
    updateToDate();
  });
}

function updateToDate() {
  const from = document.querySelector("#from").value;
  if (!from || isNaN(rentalDays)) return;

  const fromDate = new Date(from);
  fromDate.setDate(fromDate.getDate() + rentalDays);
  const toDate = fromDate.toISOString().split("T")[0];

  document.querySelector("#to").value = toDate;
}

function increaseDays() {
  const input = document.querySelector("#rentalDays");
  let currentValue = parseInt(input.value) || 0;
 
    rentalDays = currentValue + 1;
    input.value = rentalDays;
    calcPrice();
    updateToDate();
    
}

function decreaseDays() {
  const input = document.querySelector("#rentalDays");
  let currentValue = parseInt(input.value) || 0;
  if (currentValue > 0) {
    rentalDays = currentValue - 1;
    input.value = rentalDays;
    calcPrice();
    updateToDate();
  }
}

//value reading of input of vehicle ends

function calcPrice() {
  // to calculate the total price of the rent
  const pricePerDay = parseFloat(price.replace("Rs.", "").trim());

  const totalPrice = pricePerDay * vehicleNumber * rentalDays;

  const pricing = document.querySelector(".priceCalc");
  pricing.textContent = `Total price:Rs.${totalPrice}`;
  const totalpp = document.querySelector(".finalPrice");
  totalpp.textContent = ` Total payable Rs.${totalPrice}`;
}

// to automate the rental days input from the date choosen and to automate the "to" date after the input of rental days and "from" date

function trigerConfirmationScreen() {
  const conf_contne = document.querySelector(".containerOfConfirm");

  const toDateval = readFromDate();
  const fromDateval = readFromDate();

  const rentst = document.querySelector(".rentStDate");
  const renten = document.querySelector(".rentEnDate");
  renten.textContent = `To ${toDateval}`;
  rentst.textContent = `From ${fromDateval}`;

  const totaldays = document.querySelector(".rentedVhDays");
  const totalvhnum = document.querySelector(".rentedVhNum");

  totaldays.textContent = ` Days:  ${rentalDays}`;
  totalvhnum.textContent = ` vehicle:  ${vehicleNumber}`;
  if (
    toDateval != 0 &&
    fromDateval != 0 &&
    rentalDays != 0 &&
    vehicleNumber != 0
  ) {
    conf_contne.classList.add("unhide_confirmbooking");
    console.log(conf_contne);
  }
}

const cancel = document.querySelector(".cancelBtn");
cancel.addEventListener("click", () => {
  const popupConfirmBox = document.querySelector(".containerOfConfirm");
  popupConfirmBox.classList.remove("unhide_confirmbooking");
});

const confirm = document.querySelector(".confirmBtn");
confirm.addEventListener("click", () => {
  const popupConfirmBox = document.querySelector(".containerOfConfirm");
  popupConfirmBox.classList.remove("unhide_confirmbooking");
  const msgBoxes = document.querySelector("#msgBox");
  msgBoxes.className = "display_msgBox";
  setTimeout(() => {
    msgBoxes.className = "msgBox";
    window.location.href = "index.html";
  }, 500);
});

function confirmBooking(){
  const selectedVh = {
    image : image,
    tPirce : totalPrice,
    vhCount : vehicleNumber,
    rentDays : rentalDays,
  };
  localStorage.setItem("confirmedData", JSON.stringify(selectedVh));
}

window.decreaseVal = decreaseVal;
window.increaseVal = increaseVal;
window.increaseDays = increaseDays;
window.decreaseDays = decreaseDays;
window.trigerConfirmationScreen = trigerConfirmationScreen;
