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
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Todos from './components/Todos.vue'
import AddTodo from './components/AddTodo.vue'
import FilterTodos from './components/FilterTodos.vue'
import Paginations from './components/Paginations.vue'

export default {
  name: 'App',
  components: {
    Todos,
    AddTodo,
    FilterTodos,
    Paginations
  },
  data() {
    return {
      data_todos: {},
      paginations: {
        totalPages: 0,
        currentPage: 1,
      },
    }
  },
  methods: {
    ...mapActions(['fetchTodos']),

    nextPage: function() {
      let start = (this.paginations.currentPage - 1)*10;
      let end = start + 10;
      this.data_todos = this.allTodos.slice(start,end);
    },
  },
  computed: {
    ...mapGetters(['allTodos']),

    first_data: {
      get() {
        return this.allTodos.slice(0,20);
      },
      set(value) {
        this.data_todos = value;
      }
    },
    total_pages: {
      get() {
        return Math.ceil(this.allTodos.length/10);
      },
      set(value) {
        this.paginations.totalPages = value;
      }
    }
  },
  created() {
    this.fetchTodos();
  },
	beforeMount: function() {
    this.data_todos = this.first_data;
    this.paginations.totalPages = this.total_pages;
	},
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
