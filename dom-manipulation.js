// Change heading text
document.getElementById("main-heading").textContent = "Hello, World!";

// Add a new list item
const newItem = document.createElement("li");
newItem.textContent = "New Item";
document.querySelector("ul").appendChild(newItem);
