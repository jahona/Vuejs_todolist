<template>
    <div class="AppContainer">
        <TodoHeader v-bind:title="title"></TodoHeader>
        <TodoNav></TodoNav>
    </div>
</template>

<script>
import TodoHeader from './TodoHeader.vue'
import TodoNav from './TodoNav.vue'

export default {
    data() {
        return {
            title: 'Home'
        }
    },
    components: {
    'TodoHeader': TodoHeader,
    'TodoNav': TodoNav
  }
}
</script>

<style>
  
</style>
