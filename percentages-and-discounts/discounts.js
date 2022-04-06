let originalPrice = 120;
let discount = 18;
function getDiscountedPrice(originalPrice, discount) {
  return originalPrice - (originalPrice * discount / 100);
}

function calculate(){
    let originalPrice = document.getElementById("price").value;
    let discount = document.getElementById("discount").value;
    let discountedPrice = getDiscountedPrice(originalPrice, discount);
    document.getElementById("discountedPrice").innerHTML =`<h3>El precio con descuento es $ ${discountedPrice}</h3>`;
}