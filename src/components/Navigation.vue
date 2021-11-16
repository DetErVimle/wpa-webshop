<template>
    <div id="nav" class="nav-wrap">
        <div class="logo">
            <h2>WPA Webshop</h2>
        </div>

        <div class="nav">
            <router-link to="/" class="nav-link">Home</router-link><span> | </span>
            <!-- <router-link to="/about" class="nav-link">About</router-link> <span> | </span> -->
            <router-link to="/shoes" class="nav-link">Shoes</router-link> <span> | </span>
            <router-link to="/shirts" class="nav-link">Shirts</router-link> <span> | </span>
            <router-link to="/jeans" class="nav-link">Jeans</router-link>
        </div>
        
        <div class="switch">
            <ThemeButton />
        </div>

        
    </div>
</template>

<script>
import ThemeButton from "./ThemeButton.vue";

export default {
    components: { 
    ThemeButton
    },
}
</script>

<style scoped>
    .nav-wrap {
        /* background-color: chartreuse; */
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .logo {
        /* background-color: crimson; */
        box-sizing: border-box;
        padding: 1% 3% 1% 3%; 
    }

    .nav {
        box-sizing: border-box;
        padding: 2% 3% 1% 3%; 
        text-transform: uppercase;
    }

    .nav span {
        font-size: 24px;
    }

    .nav-link {
        margin: auto auto;
        
        font-size: 20px;
    }

    .switch {
        /* background-color: rgb(42, 42, 42); */
        padding: 2% 3% 1% 3%; 
    }

</style>