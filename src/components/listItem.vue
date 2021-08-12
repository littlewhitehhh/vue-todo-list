<template>
  <div class="listItem">
    <div class="left">
      <input type="checkbox">
    </div>
    <div class="center">
      吃饭
    </div>
    <div class="right">
      <input type="button" value="编辑" class="edit btn">
      <input type="button" value="删除" class="delete btn">
    </div>
  </div>
</template>

<script>
export default {
  name:'listItem',
}
</script>

<style scoped>
  .listItem{
    border-bottom: 1px solid #ccc;
    /* border-radius: 5px; */
    height: 40px;
    display: flex;
    align-items: center;
    position: relative;
  }
  .left{
    margin-right: 10px;

  }
  .right {
    position: absolute;
    right: 10px;
  }
  .btn {
    width: 50px;
    height: 26px;
    margin-left:5px;
    color: #fff;
  }
  .delete {
    background-color: #da4f49;
    border: 1px solid #da4f49;
    border-radius: 5px;
  }
  .edit {
    background-color: skyblue;
    border: 1px solid skyblue;
    border-radius: 5px;
  }
  .listItem:hover{
      background-color: #ddd;
  }
  .listItem:last-child{
    border-bottom: none;
  }
</style>