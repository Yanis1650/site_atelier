<template>
    <div class="product-card">
      <img :src="product.image" :alt="product.name" />
      <h3>{{ product.name }}</h3>
      <p>{{ product.description }}</p>
      <p>{{ product.price }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "ProductCard",
    props: {
      product: {
        type: Object,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .product-card {
    border: 1px solid #ddd;
    padding: 1em;
    border-radius: 5px;
    text-align: center;
  }
  .product-card img {
    max-width: 100%;
    height: auto;
  }
  </style>
  