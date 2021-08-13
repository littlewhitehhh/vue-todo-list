<template>
  <div id="app">
    <!-- <todo-head :taskLists="taskLists" @addTask = 'addTask'></todo-head> -->
    <todo-head></todo-head>
    <!-- <todo-body :taskLists="taskLists" @checkTask = 'checkTodo' @editTask = 'editTodo' @deleteTask='deleteTodo'></todo-body> -->
    <todo-body></todo-body>
    <!-- <todo-foot :taskLists="taskLists" @checkAllTodo = 'checkAllTodo' @clearDoneTodo='clearDoneTodo'></todo-foot> -->
    <todo-foot></todo-foot>

    
   <!--  <todo-body></todo-body>
    <todo-foot></todo-foot> -->
  </div>
</template>

<script>
// 引入组件
import todoBody from './components/todo-body.vue'
import todoHead from './components/todo-head.vue'
import todoFoot from './components/todo-foot.vue'

export default {
  name: 'App',
  components: {
    todoBody,
    todoHead,
    todoFoot
  },
  data() {
    return {
      /* taskLists: JSON.parse(localStorage.getItem('taskLists')) || [], */
    }
  },
  computed:{
    taskLists(){
      return this.$store.state.taskLists
    }
  },
  /* methods: {
    // 添加任务
    addTask(task){
      // console.log(data);
      this.taskLists.push({
        task:task,
        id:this.taskLists.length +1,
        isChecked : false
      })
    },
    // 选中已经完成的任务
    checkTodo(id){
      console.log(id);
      this.taskLists.forEach(item=>{
       return item.id ===id ? item.isChecked = !item.isChecked : item.isChecked
      })
    },

    // 编辑任务
    editTodo(val,id){
      // console.log('要修改咯',id);
      
      this.taskLists.forEach(item=>{
        if( item.id == id){
          item.task = val
        }
      })
    },

    //删除任务
    deleteTodo(id){
      this.taskLists = this.taskLists.filter(item=>{
        return item.id !=id
      })
    },
    // 全选 
    checkAllTodo(done){
      console.log(done);
      this.taskLists.forEach(item=>{
        item.isChecked = done
      })
    },
    // 清除
    clearDoneTodo(){
      this.taskLists = this.taskLists.filter(item=>{
        return item.isChecked != true
      })
    }
  },
   */
  watch:{
    // 监听taskList的变化 并保存在localStorage中
     taskLists:{
      immediate:true,
      deep:true,
      handler(newValue,oldValue){
        window.localStorage.setItem('taskLists', JSON.stringify(newValue))
      }
    }
  }
  
}
</script>

<style>
#app {
  width: 600px;
  margin: 30px auto;
  border: 1px solid #ddd;
  padding: 10px;
}
</style>
