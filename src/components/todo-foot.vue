<template>
  <div class="todo-foot">
    <div class="left">
      <input type="checkbox">
    </div>
    <div class="center">
      已完成0/全部4
    </div>
    <div class="right">
      
      <input type="button" value="清除已完成任务" class="delete btn">
    </div>
  </div>
</template>

<script>
export default {
  name:'todo-foot'
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