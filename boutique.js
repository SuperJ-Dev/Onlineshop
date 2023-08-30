'use strict';
// Liste de produits (pour simulation)
const products = [
    { id: 1, name: 'Produit 1', price: 19.99 },
    { id: 2, name: 'Produit 2', price: 29.99 },
    { id: 3, name: 'Produit 3', price: 9.99 },
    // Ajoutez d'autres produits ici
  ];
  
  const cart = []; // Panier vide au départ
  
  // Sélection des éléments du DOM
  const productsContainer = document.querySelector('.products');
  const cartContainer = document.querySelector('.cart-items');
  const cartTotal = document.querySelector('.cart-total');
  
  // Fonction pour afficher les produits sur la page
  function displayProducts() {
    productsContainer.innerHTML = '';
    products.forEach(product => {
      const productElement = document.createElement('div');
      productElement.classList.add('product');
      productElement.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.price} €</p>
        <button class="add-to-cart" data-product-id="${product.id}">Ajouter au panier</button>
      `;
      productsContainer.appendChild(productElement);
    });
  }
  
  // Fonction pour afficher le contenu du panier
  function displayCart() {
    cartContainer.innerHTML = '';
    let totalPrice = 0;
    cart.forEach(item => {
      const cartItem = document.createElement('div');
      cartItem.classList.add('cart-item');
      cartItem.innerHTML = `
        <p>${item.name} - ${item.price} €</p>
        <button class="remove-from-cart" data-product-id="${item.id}">Supprimer</button>
      `;
      cartContainer.appendChild(cartItem);
      totalPrice += item.price;
    });
    cartTotal.textContent = `Total : ${totalPrice.toFixed(2)} €`;
  }
  
  // Appel initial pour afficher les produits
  displayProducts();
  
// ... (Votre code précédent) ...

// Fonction pour supprimer un article du panier
function removeFromCart(productId) {
    const index = cart.findIndex(item => item.id === productId);
    if (index !== -1) {
      cart.splice(index, 1);
      displayCart();
    }
  }
  
  // Gestionnaire d'événement pour ajouter au panier
  productsContainer.addEventListener('click', event => {
    if (event.target.classList.contains('add-to-cart')) {
      const productId = parseInt(event.target.getAttribute('data-product-id'));
      const selectedProduct = products.find(product => product.id === productId);
      cart.push(selectedProduct);
      displayCart();
    }
  });
  
  // Gestionnaire d'événement pour enlever du panier
  cartContainer.addEventListener('click', event => {
    if (event.target.classList.contains('remove-from-cart')) {
      const productId = parseInt(event.target.getAttribute('data-product-id'));
      removeFromCart(productId);
    }
  });
  
  