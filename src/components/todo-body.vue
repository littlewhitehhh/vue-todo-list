<template>
  <div class="todo-body">
   <list-item></list-item>
   <list-item></list-item>
   <list-item></list-item>
   <list-item></list-item>

  </div>
</template>

<script>
import listItem from './listItem.vue'
export default {
  name:'todo-body',
  components:{
    listItem,
  }
}
</script>

<style scoped>
  .todo-body{
    margin-top: 20px;
    width: 100%;
    border:1px solid #ccc;
    border-radius: 5px;
    /* border-bottom: none; */
    box-sizing: border-box;
  }
</style>