<template>
  <div class="AppContainer">
    <TodoInput v-on:addTodo="createItem"></TodoInput>
    <TodoList v-bind:propsdata="items" @removeTodo="deleteItem" @updateTodo="updateItem"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoInput from './TodoInput.vue'
import TodoList from './TodoList.vue'
import TodoFooter from './TodoFooter.vue'
import { EventBus } from "./common/EventBus.vue";

/*
  컴포넌트 간에 이동시, 등록한 items 가 삭제되지 않도록 static 으로 선언
*/
var items = [];

export default {
  data() {
    return {
      title: 'Todo App',
      items: items
    }
  },
  // data: {
  //     title: 'Todo App',
  //     items: []
  // },
  beforeCreate() {
    console.log('TodoApp', 'beforeCrate');
  },
  created() {
    console.log('TodoApp', 'created');
  },
  beforeMount() {
    console.log('TodoApp', 'beforeMount');
  },
  mounted() {
    console.log('TodoApp', 'mounted');
  },
  beforeUpdate() {
    console.log('TodoApp', 'beforeUpdate');
  },
  updated() {
    console.log('TodoApp', 'updated');
  },
  beforeDestroy() {
    console.log('TodoApp', 'beforeDestroy');
  },
  desroyed() {
    console.log('TodoApp', 'desroyed');
  },
  methods: {
    createItem(item) {
      console.debug('push:', item);
      this.items.push(item);
      this.$store.commit('todoItem/updateRecentItem', item);
      this.$store.dispatch('todoItem/logging', 'add:' + item);
    },
    updateItem(item, index) {
      console.debug('item:', item, 'index:', index);
      this.items[index] = item;
    },
    deleteItem(index) {
      console.debug('pop:', this.items[index]);
      this.items.splice(index, 1);
      if (this.items.length > 0) {
        this.$store.commit('todoItem/updateRecentItem', this.items[this.items.length - 1]);    
      } else {
        this.$store.commit('todoItem/updateRecentItem', '');
      }
    },
    clearAll() {
      this.items = [];
    },
    getRecentItem() {
      console.log('TodoApp:', 'getRecentItem');

      if (this.items.length < 1) {
        return null;
      }

      return this.items[this.items.length - 1];
    },
  },
  components: {
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
