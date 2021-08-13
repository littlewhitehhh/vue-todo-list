<template>
  <div class="todo-head">
    <input type="text" placeholder="请输入你的任务名称，按回车键确认" v-model="task" @keyup.enter="handleTask">
  </div>
</template>

<script>
export default {
  name:'todo-head',
  data() {
    return {
      task:''
    }
  },
  methods: {
    handleTask(){
      // console.log(this.task);
      // 向app传递数据
      this.$emit('addTask',this.task)
      this.task = ''
    }
  },
}
</script>

<style scoped>
  .todo-head {
    width: 100%;
    height: 30px;
    box-sizing: border-box;
   
  }
  input {
    width: 100%;
    height: 100%;
    border:0;
    line-height: 30px;
    border: 1px solid #ccc;
    
    border-radius: 4px;
    font-size: 14px;
    box-sizing: border-box;
  }
  input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
  }
</style>