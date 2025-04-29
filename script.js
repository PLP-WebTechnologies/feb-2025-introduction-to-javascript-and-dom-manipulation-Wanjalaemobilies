// JavaScript to dynamically modify the HTML content

// Select elements
const mainHeading = document.getElementById("main-heading");
const subHeading = document.getElementById("sub-heading");
const dynamicText = document.getElementById("dynamic-text");
const contentSection = document.getElementById("content-section");
const changeTextButton = document.getElementById("change-text-btn");
const toggleElementButton = document.getElementById("toggle-element-btn");

// Change text and styles dynamically
changeTextButton.addEventListener("click", () => {
  dynamicText.textContent = "The text and style have been updated dynamically!";
  dynamicText.style.color = "white";
  dynamicText.style.backgroundColor = "teal";
  dynamicText.style.padding = "10px";
  dynamicText.style.borderRadius = "5px";
  dynamicText.style.fontWeight = "bold";
});

// Add or remove an element dynamically
toggleElementButton.addEventListener("click", () => {
  const existingElement = document.getElementById("new-element");
  
  if (existingElement) {
    existingElement.remove();
  } else {
    const newElement = document.createElement("p");
    newElement.id = "new-element";
    newElement.textContent = "This is a new element added dynamically!";
    newElement.style.color = "blue";
    newElement.style.fontStyle = "italic";
    contentSection.appendChild(newElement);
  }
});
