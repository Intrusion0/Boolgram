<template>
  <div id="app">
    <Header/>
    <Homepage/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Homepage from './components/Homepage.vue';

export default {
  name: 'App',
  components: {
    Header,
    Homepage
  }
}
</script>

<style lang="scss">

// General rules
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

// Clearfix / float
.clearfix::after {
  display: table;
  clear: both;
  content: "";
}

// Center placeholder
::-webkit-input-placeholder {
   color: #a7a7a7;
}

// General Container
.ms-container {
  width: 50%;
  margin: 0 auto;
}


</style>
