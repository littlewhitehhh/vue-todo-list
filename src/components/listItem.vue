<template>
  <div class="Item">
    <div class="listItem">
      <div class="left">
      <input type="checkbox" :checked='listItem.isChecked' @change="changeCheck(listItem.id)" >
    </div>
    <div class="center">
      <span v-if="!isShow">{{listItem.task}}</span>
      <input type="text" :value='listItem.task'  v-else  @blur="edit($event ,listItem.id)">

    </div>
    <div class="right">
      <input type="button" value="编辑" class="edit btn" @click="showEdit" >
      <input type="button" value="删除" class="delete btn" @click="todelete(listItem.id)">
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name:'listItem',
  props:{
    listItem:{
      type:Object,
      default:{}
    }
  },
  data() {
    return {
      isShow:false
    }
  },
  methods: {
    // 勾选已经完成的任务
    changeCheck(id){
      console.log('修改了');
      // console.log(id);
      // console.log(this.$refs.checkbox.checked);
      this.$emit('checkChangeById', id)
    },
    // 显示编辑框
    showEdit(){
      this.isShow = true
    },
    // 编辑任务
    
    edit(e,id){
      console.log('我要开始装杯了' ,id);
      // console.log(e.target.value);
      this.$emit('editById',e.target.value, id)
      this.isShow = false
    },
    todelete(id){
      console.log('我要删除了',id);
      this.$emit('deleteById', id)
    }
    
  },
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