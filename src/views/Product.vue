<template>
  <div class="my-layout">
    <div class="md-layout">
      <div
        class="
          md-layout-item md-medium-size-33 md-small-size-30 md-xsmall-size-100
        "
      >
        <md-card>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ name }}</div>
            </md-card-header-text>
          </md-card-header>
          <md-card-content>
            <md-card-media>
              <img :src="image" height="250" />
            </md-card-media>
            <span>{{ "$" + price }}</span>
          </md-card-content>
          <!-- <md-card-actions> -->
          <md-button class="md-primary" @click="addItem(id)"
            >Add to Cart</md-button
          >
          <!-- </md-card-actions> -->
        </md-card>
      </div>
    </div>

    <div class="md-layout">
      <div
        class="
          md-layout-item md-medium-size-33 md-small-size-30 md-xsmall-size-100
        "
      >
        <md-card>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ name }}</div>
            </md-card-header-text>
          </md-card-header>
          <md-card-content>
            <md-card-media>
              <img :src="image" height="250" />
            </md-card-media>
            <span>{{ "$" + price }}</span>
          </md-card-content>
          <!-- <md-card-actions> -->
          <md-button class="md-primary" @click="addItem(id)"
            >Add to Cart</md-button
          >
          <!-- </md-card-actions> -->
        </md-card>
      </div>
    </div>

    <div class="md-layout">
      <div
        class="
          md-layout-item md-medium-size-33 md-small-size-30 md-xsmall-size-100
        "
      >
        <md-card>
          <md-card-header>
            <md-card-header-text>
              <div class="md-title">{{ name }}</div>
            </md-card-header-text>
          </md-card-header>
          <md-card-content>
            <md-card-media>
              <img :src="image" height="250" />
            </md-card-media>
            <span>{{ "$" + price }}</span>
          </md-card-content>
          <!-- <md-card-actions> -->
          <md-button class="md-primary" @click="addItem(id)"
            >Add to Cart</md-button
          >
          <!-- </md-card-actions> -->
        </md-card>
      </div>
    </div>

    <!-- <div class="my-row">
        <div class="my-prod">
          <div class="md-title">{{ name }}</div>

          <img :src="image" height="250" />

          <span>{{ "$" + price }}</span>

          <button class="" @click="addItem(id)"
            >Add to Cart</button
          >
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  name: "product",
  props: ["name", "id", "image", "price"],
  methods: {
    addItem(id) {
      this.$store.dispatch("addItem", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.my-layout {
  // background-color: rosybrown;
  width: 100%;

  .my-row {
    // background-color: red;
    width: 100%;
    padding: 10%;
    box-sizing: border-box;

    .my-prod {
      // background-color: blue;
      width: 90%;

      img {
        width: 100%;
      }
    }
  }
}
</style>
