<template>
  <div class="home">
    <!-- <img class="full-width-img" src="https://www.kaufmannstatic.com/sc_images/Images/qUINT/Forside/2021/November/qUINT_forside_desktop_u44-carhartt.jpg?w=1680" alt=""> -->

    <img
    src="https://www.kaufmannstatic.com/sc_images/Images/qUINT/Forside/2021/November/qUINT_forside_desktop_u44-carhartt.jpg?w=1680"
    width="100%"
    height="500"
    style="width: 100%; height: 500px; object-fit: cover;"
    alt=""
  />

  <div class="image-list">
    <img src="https://img01.ztat.net/article/spp-media-p1/f06cdf10097648eb836bc4dc935be5cc/04884d298f954fac8b753ee9a1d361f2.jpg?imwidth=1800&filter=packshot" alt="">
    <img src="https://img01.ztat.net/article/spp-media-p1/41d7fda28ba14b2c8b8ab64230336605/49449e716ab54403aa496fd5d3eca7fe.jpg?imwidth=1800" alt="">
    <img src="https://img01.ztat.net/article/spp-media-p1/3d26279260bc40a7a467d083da58d3ae/e0d7fe53b467499fb18bb9126b797c8c.jpg?imwidth=1800&filter=packshot" alt="">
  </div>

  </div>
</template>

<script>



export default {
  name: 'Home',
  components: {

  }
}
</script>

<style scoped>
  .home {
    width: 100vw;
    align-items: center;
    justify-content: center;
  }

  .image-list {
    padding: 5%;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    justify-content: center;
    justify-content: space-around;
  }

  .image-list img {
    width: 20%;
  }

</style>
