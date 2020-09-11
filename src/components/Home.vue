<template>
    <div class="home">
        <h3>My Recently Posted Item</h3>

        <!-- TODO: 최근 데이터 가져오기 -->
        <p v-if="count>0">{{ item }}</p>
        <p>현재 등록된 ToDO 개수 : {{ count }}</p>
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

    },
    computed: {
        count() {
            return this.$store.state.count
        }
    }
}
</script>

<style>
  div .home {
      
  }
</style>
