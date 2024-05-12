import { cart,removeCartItems } from "../data/cart.js";
import { products } from "../data/products.js";
let HTML;
cart.forEach((items)=>{
    const productId=items.id
    let matchingItems;
    products.forEach((product)=>{
        if(product.id===productId){
            matchingItems=product
        }
    })
    HTML+=`<div class="cart-item-container">
    <div class="delivery-date">
      Delivery date: Tuesday, June 21
    </div>

    <div class="cart-item-details-grid">
      <img class="product-image"
        src=${matchingItems.image}>

      <div class="cart-item-details">
        <div class="product-name">
          ${matchingItems.name}
        </div>
        <div class="product-price">
          $${(matchingItems.priceCents/100).toFixed(2)}
        </div>
        <div class="product-quantity">
          <span>
            Quantity: <span class="quantity-label">${items.quantity}</span>
          </span>
          <span class="update-quantity-link link-primary">
            Update
          </span>
          <span class="delete-quantity-link link-primary js-delete" data-product-id="${matchingItems.id}">
            Delete
          </span>
        </div>
      </div>

      <div class="delivery-options">
        <div class="delivery-options-title">
          Choose a delivery option:
        </div>
        <div class="delivery-option">
          <input type="radio" checked
            class="delivery-option-input"
            name="delivery-${matchingItems.id}">
          <div>
            <div class="delivery-option-date">
              Tuesday, June 21
            </div>
            <div class="delivery-option-price">
              FREE Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-${matchingItems.id}">
          <div>
            <div class="delivery-option-date">
              Wednesday, June 15
            </div>
            <div class="delivery-option-price">
              $4.99 - Shipping
            </div>
          </div>
        </div>
        <div class="delivery-option">
          <input type="radio"
            class="delivery-option-input"
            name="delivery-${matchingItems.id}">
          <div>
            <div class="delivery-option-date">
              Monday, June 13
            </div>
            <div class="delivery-option-price">
              $9.99 - Shipping
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`
})
document.querySelector('.order-summary').innerHTML=HTML
document.querySelectorAll('.js-delete').forEach((link)=>{
    const productId=link.dataset.productId
    link.addEventListener('click',()=>{
        removeCartItems(productId)
    })
})


