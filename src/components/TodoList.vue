<template>
  <section>
    <transition-group name="list" tag="ul">
      <li v-for="(todoItem, index) in propsdata" :key="todoItem" class="shadow"> 
        <i class="checkBtn fas fa-check" aria-hidden="true"></i>
        {{ todoItem }} 
        
        <div class="btnGroup">
          <span class="modifyBtn" type="button" @click="showModelForUpdate(todoItem, index)">
            <i class="far fa-edit" aria-hidden="true"></i>
          </span>
          <span class="removeBtn" type="button" @click="removeTodo(index)">
            <i class="far fa-trash-alt" aria-hidden="true"></i>
          </span>
        </div>
      </li>
    </transition-group>

    <modal v-if="showModal">
      <!-- Modal Header -->
      <h3 slot="header">변경</h3>

      <!-- Modal Footer -->
      <div slot="body">
        <input type="text" v-model="inputData">
      </div>
      <span slot="footer">
        <span class="modal__footer--edit" @click="updateTodo()">
          <i class="far fa-edit" aria-hidden="true"></i>
        </span>
        <span class="modal__footer--close" @click="showModal = false">
          <i class="fas fa-times" aria-hidden="true"></i>
        </span>
      </span> 
    </modal>
  </section>
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      inputData: '',
      selectIndex: '',
      showModal: false
    }
  },
  props: ['propsdata'],
  methods: {
    removeTodo(index) {
      this.$emit('removeTodo', index);
    },
    showModelForUpdate(todoItem, index) {
      this.showModal = !this.showModal;
      this.inputData = todoItem;
      this.selectIndex = index;
    },
    updateTodo() {
      this.$emit('updateTodo', this.inputData, this.selectIndex);
      this.showModal = false;
    }
  },
  components: {
    Modal: Modal
  }
}
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }

  .modifyBtn {
    margin-left: auto;
    margin-right: 1em;
    color: #de4343;
  }

  .btnGroup {
    margin-left: auto;
  }

  .modal__footer--edit {
    margin-right: 1em;
  }

  .modal__footer--close {

  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
  }

  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY
  }
  
</style>
