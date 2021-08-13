import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        // 任务列表
        taskLists: JSON.parse(localStorage.getItem('taskLists')) || [],
    },
    mutations: {
        // 添加
        addTask(state, value) {
            state.taskLists.push({
                id: state.taskLists.length + 1 * Math.random(),
                task: value,
                isChecked: false
            })
        },
        //完成与否
        changeCheck(state, id) {
            state.taskLists.forEach(item => {
                return item.id == id ? item.isChecked = !item.isChecked : item.isChecked
            })
        },
        // 修改任务
        editTask(state, [val, id]) {
            console.log(val, id);

            state.taskLists.forEach(item => {
                if (item.id == id) {
                    item.task = val
                }
            })
        },
        // 删除任务
        deleteTodo(state, id) {
            state.taskLists = state.taskLists.filter(item => {
                return item.id != id
            })
        },
        // 全选和反选
        checkAllTodo(state, val) {
            state.taskLists.forEach(item => {
                item.isChecked = val
            })
        },
        // 清除已完成
        claerDoneTodo(state) {
            state.taskLists = state.taskLists.filter(item => {
                return item.isChecked == false
            })
        }
    },
    actions: {},
    modules: {}
})