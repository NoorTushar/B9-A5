// will open up the modal
function success() {
   modal.classList.remove("hidden");
   modal.classList.add("fixed");
   body.style.overflow = "hidden";
}

// for closing the modal
function closeModal() {
   modal.classList.remove("fixed");
   modal.classList.add("hidden");
   body.style.overflow = "auto";
   location.reload();
}

// after valid discount coupon is entered
function applyDiscount(discountPercent) {
   const totalPrice = Number(totalPriceElement.textContent);
   const discount = discountPercent / 100;

   const tr = document.createElement("tr");
   tr.classList.add(
      "*:font-medium",
      "*:text-base",
      "*:text-our-black",
      "border-b",
      "border-gray-300"
   );

   const td1 = document.createElement("td");
   td1.setAttribute("colspan", "2");
   td1.textContent = "Discount Value";

   const td2 = document.createElement("td");
   td2.classList.add("text-right");
   td2.textContent = totalPrice * discount;

   tr.appendChild(td1);
   tr.appendChild(td2);
   tfootElement.appendChild(tr);

   couponDivElement.classList.add("hidden");
   const priceAfterDiscount = totalPrice - totalPrice * discount;

   grandTotalElement.textContent = priceAfterDiscount;
}

// activating Next Button Function Condition
function activateNextButton() {
   nextButtonElement.disabled = false;
   nextButtonElement.classList.add(
      "bg-our-primary",
      "border-our-primary",
      "hover:bg-white",
      "hover:text-our-primary",
      "transition-all",
      "duration-300"
   );
   nextButtonElement.classList.remove("bg-gray-400");
}
