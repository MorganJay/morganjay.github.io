const cartTasks = (e) => {
  const { classList } = e.target;
  if (classList.contains("remove")) {
    delItem(e);
  } else if (classList.contains("multiplier")) {
    e.target.addEventListener("input", (e) => {
      if (e.target.value < 1) {
        e.target.value = 1;
      }
    });
    totalPrice();
  }
};

const delItem = (e) => {
  e.target.parentElement.parentElement.remove();
  totalPrice();
};

const addItem = (e) => {
  const { previousElementSibling } = e.target.parentElement;
  const itemName = previousElementSibling.querySelector(".card-title")
    .innerText;
  const itemPrice = previousElementSibling.querySelector(".card-text")
    .innerText;
  const newRow = document.createElement("tr");
  newRow.innerHTML = `
  <tr>
    <td class="item">
      <span class="item-name">${itemName}</span>
      <span class="item-price">${itemPrice}</span>
    </td>
    <td class="qnt">
      <input type="number" value="1" class="multiplier" />
     </td>
    <td><button class="btn remove">&times;</button></td>
   </tr>
  `;
  tbody.append(newRow);
  totalPrice();
};

const totalPrice = () => {
  let total = 0;
  const tr = tbody.querySelectorAll("tr");
  tr.forEach((row) => {
    total =
      total +
      parseFloat(
        row
          .querySelector(".item")
          .querySelector(".item-price")
          .textContent.replace("#", "")
      ) *
        parseFloat(
          row.querySelector(".qnt").querySelector(".multiplier").value
        );
  });
  totalOutput.textContent = total;
};

const purchase = () => {
  tr.forEach((row) => {
    row.remove();
    totalPrice();
  });
};

document.addEventListener("DOMContentLoaded", totalPrice);

const tbody = document.querySelector("tbody");
const tr = tbody.querySelectorAll("tr");
tbody.addEventListener("click", cartTasks);

const totalOutput = document.querySelector("#total");
const addBtn = document.querySelectorAll(".add");
addBtn.forEach((btn) => btn.addEventListener("click", addItem));

const buy = document.querySelector(".buy");
buy.addEventListener("click", purchase);
