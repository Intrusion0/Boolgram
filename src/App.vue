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

// General rules for profile pictures
.profile-picture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

// General rules for profiles
.container-profile {
  // Profile info 
  .profile-info {
    span {
      display: block;
    }
  }
}

// Profile cta
.cta {
  color: #0095f6;
  font-weight: 700;
  cursor: pointer;
}

</style>
