// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span')
  const quantity = product.querySelector('.quantity input')
  const subtotal = product.querySelector('.subtotal span')
  const total = Number(price.innerHTML) * Number(quantity.value);

  subtotal.innerText = total;
  return total;
}

function calculateAll() {

  // ITERATION 2
  const twoRows = document.querySelectorAll('.product');

  let subTotalAll = 0;
  twoRows.forEach((everyProduct) => {
    subTotalAll += updateSubtotal(everyProduct)
  });

  const finalPrice = document.querySelector('#total-value span');
  finalPrice.innerText = subTotalAll;
};

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const nodeToDelete = target.parentNode.parentNode
  nodeToDelete.remove();
}

// ITERATION 5

function createProduct() {
  
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  const removeButtons = document.querySelectorAll('.btn-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', removeProduct)
  })
  //... your code goes here
});
