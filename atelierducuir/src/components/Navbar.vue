<template>
    <nav>
      <ul>
        <li><router-link to="/">Accueil</router-link></li>
        <li><router-link to="/products">Produits</router-link></li>
        <li><router-link to="/about">À propos</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "Navbar",
  };
  </script>
  
  <style scoped>
  nav ul {
    display: flex;
    justify-content: space-around;
    list-style: none;
    padding: 0;
  }
  nav ul li {
    margin: 0 10px;
  }
  nav ul li a {
    text-decoration: none;
    color: black;
  }
  </style>
  