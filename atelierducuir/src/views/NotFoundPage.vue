<template>
    <section>
      <h1>404 - Page non trouvée</h1>
      <p>La page que vous cherchez n'existe pas.</p>
      <router-link to="/">Retour à l'accueil</router-link>
    </section>
  </template>
  
  <script>
  export default {
    name: "NotFoundPage",
  };
  </script>
  
  <style scoped>
  section {
    text-align: center;
    padding: 2em;
  }
  </style>
  