<template>
    <div class="home">
      <h1>Bienvenue sur le site de Sellerie et Maroquinerie</h1>
      <Gallery />
    </div>
  </template>
  
  <script>
  import Gallery from "../components/Gallery.vue";
  
  export default {
    name: "Home",
    components: {
      Gallery,
    },
  };
  </script>
  