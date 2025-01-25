<template>
  <section>
    <h1>Nos Produits</h1>
    <div class="products-grid">
      <ProductCard v-for="product in products" :key="product.id" :product="product" />
    </div>
  </section>
</template>

<script>
import { products } from "../data/data.js";
import ProductCard from "../components/ProductCard.vue";

export default {
  name: "ProductsPage",
  components: { ProductCard },
  data() {
    return {
      products,
    };
  },
};
</script>

<style scoped>
.products-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1em;
}
</style>
