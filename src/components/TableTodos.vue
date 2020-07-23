<template>
  <table class="table">
    <thead class="thead-dark">
      <tr>
        <th>Id</th>
        <th>Completed</th>
        <th>Title</th>
      </tr>
    </thead>
    <tbody>
        <tr
          v-for="(todo,index) in todos"
          :key="index" >
          <td>{{ todo.id }}</td>
          <td>{{ todo.completed }}</td>
          <td>
            <input
              type="text"
              v-model="todo.title"
              @change="$emit('update:todo.title', $event); $emit('update_completed', index);"
            >
          </td>
        </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    todos: {},
  },

  methods: {
    // update_completed(index) {
    // //   console(index);
    // //   console(this.$props.todos[index]);
    // //   console(this.$props.todos[index].completed);
    //   this.$props.todos[index].completed = true;
    //   this.$emit('update:todos[index].completed', true);
    // }
  },
};
</script>

<style>
.table {
    width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    display: table;
}
</style>