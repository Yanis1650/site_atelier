<template>
  <section class="homepage">
    <h1>Bienvenue sur la page d'accueil</h1>
    <p>Découvrez les activités de sellerie et maroquinerie.</p>
    <div class="cta">
      <router-link to="/products">Voir nos produits</router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomePage", // Nom modifié pour respecter la règle
};
</script>

<style scoped>
section {
  padding: 2em;
  text-align: center;
}
.homepage {
  text-align: center;
  padding: 2em;
}
.cta a {
  background-color: #e67e22;
  color: white;
  padding: 0.5em 1em;
  border-radius: 5px;
  text-decoration: none;
}
.cta a:hover {
  background-color: #d35400;
}
</style>
