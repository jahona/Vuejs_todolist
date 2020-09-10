<template>
  <div id="app">    
    <app-header></app-header>
    <app-nav></app-nav>
    <div class="main">
      <router-view></router-view>
    </div>
    <div class="footer">
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Nav from './components/Nav.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  methods: {

  },
  components: {
    'app-header': Header,
    'app-nav': Nav,
    'app-footer': Footer
  }
}
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F8;
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03)
  }

  .main {
    height: 100%;
  }
</style>
