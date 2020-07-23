<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos
        :data_todos="data_todos"
      />
      <Paginations
        :paginations.sync="paginations"
        @nextPage="nextPage"
      />
    </div>
    <div class="container">
      <TableTodos
        :todos.sync="data_todos"
        @update_completed="update_completed"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue'
import Paginations from './components/Paginations.vue'
import TableTodos from './components/TableTodos.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos,
    Paginations,
    TableTodos
  },
  data() {
    return {
      data_todos: {},
      paginations: {
        totalPages: 0,
        currentPage: 1,
        totalVisible: 7,
      },
    }
  },
  methods: {
    ...mapActions(['fetchTodos','confirm_dialog']),

    nextPage: function() {
      this.confirm_dialog('are you sure next page?')
        .then(() => {
          let start = (this.paginations.currentPage - 1)*9;
          let end = start + 9;
          this.data_todos = this.allTodos.slice(start,end);
        })
        .catch(() => {
          //なにかキャンセル後に入れたい処理があれば
        });
    },

    update_completed(index) {
      this.data_todos[index].completed = true;
    }
  },
  computed: {
    ...mapGetters(['allTodos']),
  },
  created() {
    this.fetchTodos();
  },
  watch: {
    allTodos(newData) {
      this.paginations.totalPages = Math.ceil(newData.length/9);
      this.data_todos = newData.slice(0,9);
    }
  }
}
</script>

<style>
  body {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    line-height: 1.6;
    background: #e8f7f0;
  }
  .container {
    max-width: 1100px;
    margin: auto;
    overflow: auto;
    padding: 0 2rem;
  }
</style>
