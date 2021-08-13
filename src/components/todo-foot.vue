<template>
  <div class="todo-foot">
    <div class="left">
      <input type="checkbox" @change='checkAll' :checked='isAll'>
    </div>
    <div class="center">
      已完成{{done}}/全部{{allTask}}
    </div>
    <div class="right">
      
      <input type="button" value="清除已完成任务" class="delete btn" @click="clearDone">
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name:'todo-foot',
  // props:['taskLists']
  computed:{
    ...mapState(['taskLists']),
    allTask(){
       return this.taskLists.length
    },
    done(){
      return this.taskLists.filter(item=>{
        return item.isChecked == true
      }).length
    },
    isAll(){
        return this.allTask == this.done && this.allTask>0
    },
    
  },
  methods: {
    // 全选
    checkAll(e){
      /* console.log('我要开始全选了');
      this.$emit('checkAllTodo',e.target.checked)
 */
      // 使用vuex
      this.$store.commit('checkAllTodo',e.target.checked)
    },
    // 清除
    clearDone(){
      // this.$emit('clearDoneTodo')

      // 使用vuex
      this.$store.commit('claerDoneTodo')
    }
  },

}
</script>

<style scoped>
 .todo-foot{
   position: relative;
   margin-top: 20px;
   display: flex;
   align-items: center;
   
 }
 .left{
   margin-right: 10px;

 }
 .right {
   position: absolute;
   right: 20px;
 }
 .btn {
   background-color: #da4f49;
   border-radius: 5px;
   color: #fff;

  border-color:  #da4f49;
  display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    border-radius: 4px;

 }
</style>