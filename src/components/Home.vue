<template>
    <div class="home">
        <h3>My Recently Posted Item</h3>

        <span on:>{{ item }}</span>
    </div>
</template>

<script>
import { EventBus } from "./common/EventBus.vue";

export default {    
    data() {
        return {
            title: 'Home',
            item: 'content'
        }
    },
    created() {
        console.log('Home created');
    },
    components: {

    }
}
</script>

<style>
  div .home {
      
  }
</style>
