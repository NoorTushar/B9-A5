function success() {
   modal.classList.add("fixed");
   modal.classList.remove("hidden");
   body.style.overflowY = "hidden";
}

function closeModal() {
   modal.classList.remove("fixed");
   modal.classList.add("hidden");
   body.style.overflowY = "auto";
}
