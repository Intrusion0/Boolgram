<template>
  <main>
    <div class="ms-container clearfix">

      <div id="container-left">
        <Stories/>
        <Posts/>
      </div>

      <div id="container-right">

        <!-- Container account -->
        <div id="container-account">
          <!-- Profile picture -->
          <span>

          </span>
          <!-- Profile info -->
          <span>

          </span>
          <!-- Profile cta (call to action) -->
          <span>

          </span>
        </div>

        <!-- Container suggestions -->
        <Suggestions/>
      </div>
    </div>
  </main>
</template>

<script>
import Posts from './Posts.vue'
import Stories from './Stories.vue'
import Suggestions from './Suggestions.vue'

export default {
  name: 'Homepage',

  components: {
    Stories,
    Posts,
    Suggestions
  },

  data() {
    return {

    }
  },
}
</script>

<style scoped lang="scss">

// Main
main {
  background-color: #fafafa;
  padding: 50px 0;

  #container-left, #container-right {
    display: inline-block;
  }

  #container-left {
    width: 60%;
    float: left;
  }

  #container-right {
    width: 40%;
    float: right;

    // Container account
    #container-account {
      width: 100%;
      // debug
      height: 100px;
      background-color: darkviolet;
    }
  }
}

</style>