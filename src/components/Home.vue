<template>
    <div class="home">
        <h3>My Recently Posted Item</h3>

        <div class="Home__main">
            <p v-if="recentItem !== ''" class="Home__main--title"><최근 추가된 할 일></p>
            <p v-if="recentItem !== ''" class="Home__main--content">{{ recentItem }}</p>
        </div>
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
        console.log('store.state.recentItem:', this.$store.state.recentItem);
    },
    components: {

    },
    computed: {
        recentItem() {
            return this.$store.state.recentItem
        }
    }
}
</script>

<style>
  div .home {
      
  }

  .Home__main {
      width: 30%;
      box-shadow: 5px 5px 5px;
      text-align: center;
      margin: 4em auto;
      height: 200px;
      background-color: white;
  }

  .Home__main--title {
      padding-top: 2em;
      font-size: 20px;
  }

  .Home__main--content {
      padding-top: 1em;
      font-size: 25px;
  }
</style>
