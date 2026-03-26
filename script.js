const productNameInput = document.getElementById('product-name');
const productPriceInput = document.getElementById('product-price');
const addProductButton = document.getElementById('add-product');
const cart = document.getElementById('cart');
const totalPriceSpan = document.getElementById('total-price');

let totalPrice = 0;

addProductButton.addEventListener('click', function () {
  const name = productNameInput.value.trim();
  const price = parseFloat(productPriceInput.value);

  if (name === '' || isNaN(price) || price <= 0) {
    alert('Please enter valid product name and price');
    return;
  }

  const li = document.createElement('li');
  li.classList.add('cart-item');

  const nameSpan = document.createElement('span');
  nameSpan.textContent = name;

  const priceSpan = document.createElement('span');
  priceSpan.textContent = `$${price.toFixed(2)}`;

  const removeBtn = document.createElement('button');
  removeBtn.textContent = 'Remove';

 removeBtn.addEventListener('click', function () {
  totalPrice -= price;

  if (totalPrice < 0) {
    totalPrice = 0;
  }

  totalPriceSpan.textContent = totalPrice.toFixed(2);
  li.remove();
});

  li.appendChild(nameSpan);
  li.appendChild(priceSpan);
  li.appendChild(removeBtn);

  cart.appendChild(li);

  totalPrice += price;
  totalPriceSpan.textContent = totalPrice.toFixed(2);

  productNameInput.value = '';
  productPriceInput.value = '';
});