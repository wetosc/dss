<template>
  <div>
    <h1>List of courses</h1>
    <ul>
      <li v-bind:key="course.name+'zxz'" v-for="course in courses">{{course.name}} [{{course.lecturer}}]</li>
    </ul>
  </div>
</template>

<script>
// {
//   'name': 'Startup Engineering',
//   'lecturer': 'Emilian'
// },
// {
//   'name': 'Linear Algebra',
//   'lecturer': 'Stihi'
// },
// {
//   'name': 'Operating Systems',
//   'lecturer': 'Razvan'
// }

import axios from 'axios';

export default {
  name: 'HelloWorld',
  data () {
    return {
      'courses': []
    }
  },
  created: function() {
    this.loadCourses();
  },
  methods: {
    loadCourses: function() {
      console.log('loading courses ...');
      axios.get('http://localhost:3000/api/courses').then((response) => {
        this.courses = response.data;
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  /*display: inline-block;*/
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
