<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <v-navbar></v-navbar>
    <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <!-- 这里不会被keepalive -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>

    <v-footer></v-footer>

  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue"
import Footer from "./components/Footer.vue"
import $ from "jquery"
export default {
  name: 'App',
  components:{
    "v-navbar":Navbar,
    "v-footer":Footer
  },
  mounted(){
     $(document).ready(function(){
        $('html').attr('lang',LAN)
    })
  }
}
</script>

