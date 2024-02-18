/** Variables **/

const seatsLeftElement = document.getElementById("seatsLeftElement");
const allSeats = document.querySelectorAll(".seats");
const seatCount = document.getElementById("seatCount");

/**************/

// let the initial total seat remaining be dynamic from the start
// display it on the front end dynamically
let totalSeatsRemaining = allSeats.length;
seatsLeftElement.textContent = totalSeatsRemaining;

// this is the seat counter
// it will later on increment when user choses a seat
let seatCounter = 0;

allSeats.forEach(function (seat) {
   seat.addEventListener("click", function (event) {
      //change the color of the button clicked
      seat.classList.add("bg-our-primary", "text-white");
      seat.classList.remove("bg-[#F7F8F8]", "text-[#03071280]");

      // get the seat name of the clicked button
      const seatName = seat.textContent.trim();

      // increase the seat count by 1
      seatCounter++;

      // display it beside the seat header
      seatCount.textContent = seatCounter;

      // decrement the total seats remaining
      totalSeatsRemaining--;
      seatsLeftElement.textContent = totalSeatsRemaining;
   });
});
