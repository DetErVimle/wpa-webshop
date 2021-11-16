<template>
  <div class="full-shop-wrap">
    <!-- <div class="page-title-wrap">
      <h1>Shoes</h1>
    </div>
    <div class="shoppingcart-wrap">
      <div class="cart">
        <Shopping />
      </div>
    </div>
    <div class="about">
      <div class="categories">
        <p>Her skal der være kategorier</p>
      </div>
      <div class="shop-wrap">
        <Product
          v-for="product in products"
          :key="product.id"
          :id="product.id"
          :name="product.name"
          :image="product.image"
          :price="product.price"
        />
      </div>
    </div> -->
  </div>
</template>

<script>
// import Product from "./Product.vue";
// import Shopping from "../components/Shopping.vue";

export default {
  computed: {
    // products() {
    //   return this.$store.getters.products;
    // },
  },
  components: {
    // Product,
    // Shopping,
  },
};
</script>

<style scoped>
.shoppingcart-wrap {
  display: flex;
  justify-content: flex-end;
}

.cart {
  margin-right: 1%;
}

.page-title-wrap {
  text-align: center;
  text-transform: uppercase;
}

.about {
  /* background-color: blue; */
  display: flex;
}

.categories {
  background-color: burlywood;
  width: 20%;
}

.shop-wrap {
  /* background-color: green; */
  display: flex;
  width: 80%;
}
</style>
