<template>
  <div>
    <p>Completed Tasks: {{items.filter(todo => {return todo.done === true}).length}}</p>
    <p>Pending Tasks: {{items.filter(todo => {return todo.done === false}).length}}</p>
   
    <todo  v-for="(todo, index) in items" :key="index" v-bind:todo="todo"></todo>
  </div>
</template>

<script type = "text/javascript" >

import Todo from './Todo';

export default {
  props: ['items'],
  components: {
    Todo,
  },
};
</script>