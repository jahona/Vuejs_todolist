<template>
  <div class="AppContainer" id="app">
    <TodoHeader></TodoHeader>
    <TodoNav></TodoNav>
    <TodoInput v-on:addTodo="createItem"></TodoInput>
    <TodoList v-bind:propsdata="items" @removeTodo="deleteItem" @updateTodo="updateItem"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoNav from './components/TodoNav.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  data() {
    return {
      items: []
    }
  },
  beforeCreate() {
    console.log('beforeCrate');
  },
  created() {
    console.log('created');
  },
  beforeMount() {
    console.log('beforeMount');
  },
  mounted() {
    console.log('mounted');
  },
  beforeUpdate() {
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
  beforeDestroy() {
    console.log('beforeDestroy');
  },
  desroyed() {
    console.log('desroyed');
  },
  methods: {
    createItem(item) {
      console.debug('push:', item);
      this.items.push(item);
    },
    updateItem(item, index) {
      console.log('item:', item, 'index:', index);
      this.items[index] = item;
    },
    deleteItem(index) {
      console.debug('pop:', this.items[index]);
      this.items.splice(index, 1);
    },
    clearAll() {
      this.items = [];
    }
  },
  components: {
    'TodoHeader': TodoHeader,
    'TodoNav': TodoNav,
    'TodoInput': TodoInput,
    'TodoList': TodoList,
    'TodoFooter': TodoFooter
  }
}
</script>

<style>
  .AppContainer {
    width: 50%;
    margin: 0 auto;
  }

</style>
