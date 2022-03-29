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
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

// General rules
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

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
