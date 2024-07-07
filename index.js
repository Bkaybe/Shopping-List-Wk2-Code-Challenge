document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const clearBtn = document.getElementById("clear-btn");
  const listDisplay = document.getElementById("list-display");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    handleNewShopping(e.target.input_field.value);

    form.reset();
  });

  clearBtn.addEventListener("click", () => {
    listDisplay.innerHTML = ""; // Clear all items
  });
});

const handleNewShopping = (newItem) => {
  // creating new elements
  let deleteItemBtn = document.createElement("button");
  let shopList = document.createElement("li");

  let checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  //   Adding event listener to delete button to delete an actual Item
  deleteItemBtn.addEventListener("click", handleDeletion);

  //   Adding event listener the checkbox to put a line through
  checkbox.addEventListener("click", handleCheckBoxEvent);

  // Giving the new elements their new values
  deleteItemBtn.textContent = " x ";
  shopList.textContent = `${newItem}  `;

  //appending checkbox and deleteItem button to the shopList
  shopList.appendChild(checkbox);
  shopList.appendChild(deleteItemBtn);

  //appending the shoplist in the div containing the list
  document.querySelector("#list-display").appendChild(shopList);
};

const handleDeletion = (e) => {
  e.target.parentNode.remove();
};

const handleCheckBoxEvent = (e) => {
  const checkbox = e.target;
  const listItem = checkbox.parentNode;

  if (checkbox.checked) {
    listItem.style.backgroundColor = "#1b631b"; // Change background color when checked
  } else {
    listItem.style.backgroundColor = ""; // Reset background color when unchecked
  }
};
