<template>
<nav>
  <img src="@/assets/logo.png" alt="Atelier du Cuir" class="logo" />
    <ul>
      <li><router-link to="/" exact-active-class="active-link">Accueil</router-link></li>
      <li><router-link to="/about" exact-active-class="active-link">À propos</router-link></li>
      <li><router-link to="/products" exact-active-class="active-link">Produits</router-link></li>
      <li><router-link to="/contact" exact-active-class="active-link">Contact</router-link></li>
    </ul>
    </nav>
  </template>
  
  <script>
  export default {
    name: "AppNavbar", // Nom mis à jour pour respecter les règles ESLint
  };
  </script>
  
  
  <style scoped>
  .active-link {
  font-weight: bold;
  text-decoration: underline;
  }
  nav {
    display: flex;
    justify-content: space-around;
    background-color: #333;
    color: white;
    padding: 1em;
  }
  ul {
    list-style: none;
    display: flex;
  }
  li {
    margin: 0 1em;
  }
  </style>
  