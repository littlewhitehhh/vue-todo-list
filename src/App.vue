<template>
  <div id="app">
    <todo-head></todo-head>
    <todo-body></todo-body>
    <todo-foot></todo-foot>
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
