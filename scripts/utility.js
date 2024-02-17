// To get and set text to Elements

function getInnerTextById(elementId) {
   const element = document.getElementById(elementId);
   const elementText = element.textContent;
   return elementText;
}

function setInnerTextById(elementId, value) {
   const element = document.getElementById(elementId);
   element.textContent = value;
}

// To get value from Input Field
function getInnerTextValueById(elementId) {
   const element = document.getElementById(elementId);
   const elementValue = element.value;
   return elementValue;
}
