/** Variables **/

const seatsLeftElement = document.getElementById("seatsLeftElement");
const allSeats = document.querySelectorAll(".seats");
const seatCount = document.getElementById("seatCount");
const tBodyElement = document.getElementById("tbody");
const totalPriceElement = document.getElementById("totalPrice");
const grandTotalElement = document.getElementById("grandTotal");
const nextButtonElement = document.getElementById("nextButton");
const phoneNumberField = document.getElementById("phone");
const couponInputField = document.getElementById("coupon");
const couponButtonElement = document.getElementById("couponButton");
const couponDivElement = document.getElementById("couponDiv");
const tfootElement = document.getElementById("tfoot");

const body = document.getElementById("body");
const modal = document.getElementById("modal");
const modalCloseBtn = document.getElementById("modalCloseBtn");

/**************/

// let the initial total seat remaining be dynamic from the start
// display it on the front end dynamically
let totalSeatsRemaining = allSeats.length;
seatsLeftElement.textContent = totalSeatsRemaining;

// this is the seat counter
// it will later on increment when user choses a seat
let seatCounter = 0;

// total price to be 0 and added each time a seat is booked
let totalPrice = 0;

// grand total
let grandTotal = 0;

// upon clicking each seat, the below actions will take place
allSeats.forEach(function (seat) {
   seat.addEventListener("click", function (event) {
      if (seatCounter < 4) {
         //change the color of the button clicked
         seat.classList.add("bg-our-primary", "text-white");
         seat.classList.remove("bg-[#F7F8F8]", "text-[#03071280]");

         seat.disabled = true;

         // get the seat name of the clicked button
         const seatName = seat.textContent.trim();

         // increase the seat count by 1
         seatCounter++;

         // display it beside the seat header
         seatCount.textContent = seatCounter;

         // decrement the total seats remaining
         totalSeatsRemaining--;
         seatsLeftElement.textContent = totalSeatsRemaining;

         // append the seat name and details and price to the receipt

         const tr = document.createElement("tr");
         const td1 = document.createElement("td");
         const td2 = document.createElement("td");
         const td3 = document.createElement("td");

         td1.textContent = seatName;
         td2.textContent = "Economy";
         td3.textContent = 550;
         td3.classList.add("ticket-price");
         td3.classList.add("text-right");

         tr.appendChild(td1);
         tr.appendChild(td2);
         tr.appendChild(td3);

         tBodyElement.appendChild(tr);

         // update the total price before discount
         let tickets = document.querySelectorAll(".ticket-price");
         let ticketPrice = Number(tickets[tickets.length - 1].textContent);

         totalPrice = totalPrice + ticketPrice;
         totalPriceElement.textContent = totalPrice;

         // get the total price from total price element and put in grand total
         totalPriceFromHTML = Number(totalPriceElement.textContent);

         grandTotalElement.textContent = totalPriceFromHTML;

         // coupon part, when 4 tickets will be purchased:

         if (seatCounter === 4) {
            // enable field
            couponInputField.disabled = false;

            // enable button
            couponButtonElement.disabled = false;
            couponButtonElement.classList.add(
               "bg-our-primary",
               "border-our-primary",
               "hover:bg-white",
               "hover:text-our-primary",
               "transition-all",
               "duration-300"
            );
            couponButtonElement.classList.remove("bg-gray-400");
         }

         // before NEXT button is activated check whether one seat is booked and phone number is given
         if (seatCounter > 0 && phoneNumberField.value !== "") {
            activateNextButton();
         }
      } else if (seatCounter >= 4) {
         alert("You have already booked 4 seats");
      }
   });
});

// After the coupon button is active
couponButtonElement.addEventListener("click", function () {
   couponValue = couponInputField.value;
   if (couponValue === "NEW15") {
      applyDiscount(15);
   } else if (couponValue === "Couple 20") {
      applyDiscount(20);
   } else {
      alert("Invalid Coupon Code");
   }
});

// Activating the next button
phoneNumberField.addEventListener("change", function () {
   activateNextButton();
});

// Activating the next button
phoneNumberField.addEventListener("keyup", function () {
   activateNextButton();
});
