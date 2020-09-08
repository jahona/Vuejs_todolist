<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" placeholder="Type What you have to do" v-on:keyup.enter="addTodo">

    <span class="addContainer" v-on:click="addTodo">
      <i class="addBtn fas fa-plus" aria-hidden="true"></i>
    </span>

    <modal v-if="showModal">
      <!-- Modal Header -->
      <h3 slot="header">경고</h3>

      <!-- Modal Footer -->
      <span slot="footer" @click="showModal = false">
        할 일을 입력하세요.
        <i class="closeModalbtn fas fa-times" aria-hidden="true"></i>
      </span> 
    </modal>
  </div>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  // data() {
  //   return {
  //     newTodoItem: ''
  //   }
  // }

  data: function() {
    return {
      newTodoItem: '',
      showModal: false
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== "") {
        var value = this.newTodoItem && this.newTodoItem.trim();
        this.$emit('addTodo', value);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    },
    clearInput() {
      this.newTodoItem = '';
    },
    test() {
      console.log('test');
    }
  },
  components: {
    Modal: Modal
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }
  .inputBox {
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
    margin: 0 5em; 
  }
  .inputBox input {
    border-style: none;
    width: 80%;
    font-size: 0.9rem;
  }
  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }
  .addBtn {
    color: white;
    vertical-align: middle;
  }
</style>
