<template>
  <nav class="nav__layout">
    <ul>
      <li class="nav__menu--link">
        <router-link to="/home">Go Home</router-link>
      </li>
      <li class="nav__menu--link">
        <router-link to="/">My ToDo List</router-link>
      </li>
      <li class="nav__menu--link">
        <router-link to="/intro">Introduce</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  
}
</script>

<style>
  .nav__layout {
    height: 3rem;
    width: auto;
    margin-bottom: 3em;
  }

  .nav__layout ul {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .nav__layout ul li{
    list-style: none;
    color: #000000;
    line-height: 3rem;
    vertical-align: middle;
    text-align: center;
  }

  .nav__layout .nav__menu--link:hover {
    color: red;
  }
</style>
