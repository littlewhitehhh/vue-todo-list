<template>
  <div class="todo-body">
   <list-item
              
               v-for="(item) in taskLists"
               :key="item.id"
              :listItem="item" 
              @checkChangeById='changeToAPP' 
               @editById='editToApp'
               @deleteById='deleteToApp'>
    </list-item>
   <!-- <list-item></list-item>
   <list-item></list-item>
   <list-item></list-item> -->

  </div>
</template>

<script>
import listItem from './listItem.vue'
export default {
  name:'todo-body',
  components:{
    listItem,
  },
  props:{
    taskLists:{
      type:Array,
      default:[]
    }
  },
  data() {
    return {
      id:0,
    }
  },
  methods: {
    changeToAPP(id){
      console.log(id);
      this.$emit('checkTask',id)
    },
    editToApp(val,id){
      console.log('我要向app传递编辑的人了',id);
      this.$emit('editTask',val,id)
    },
    deleteToApp(id){
      console.log('我要向app传递删除的人了',id);
      this.$emit('deleteTask',id)
    }
  },
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