// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = Number(product.querySelector('.price span').innerText)
  let quantity = Number(product.querySelector('.quantity > input').value)
  let thing = price * quantity

  const subTotal = product.querySelector('.subtotal span').innerHTML = thing  
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const allProducts = document.getElementsByClassName('product')
  let subtotalArr = []
  const productList = Array.from(allProducts)
  
  // ITERATION 3
   productList.forEach(function(x){
    // updateSubtotal(x)
    updateSubtotal(x)
    // Get the number stored at x.querySelector() blah blah 
     subtotalArr.push(Number(x.querySelector('.subtotal span').innerHTML))
  })
  // Out put to the total section that shows total value
  document.getElementById('total-value').innerText = `Total: $${subtotalArr.reduce((x,y)=> x + y)}`
}
// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.parentNode.remove();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeButtons = [...document.getElementsByClassName('btn btn-remove')]
  removeButtons.forEach(el=>{
    el.addEventListener('click',removeProduct)
  })

  // console.log(removeButtons)
});
