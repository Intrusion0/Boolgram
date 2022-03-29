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

          <div class="container-profile">
            <!-- Profile picture -->
            <div class="picture">
              <img src="@/assets/profile.jpg" alt="profile-picture" class="profile-picture">
            </div>

            <!-- Profile info -->
            <div class="profile-info">
              <span class="user-name">michelepapagni</span>
              <span class="name">Michele Papagni</span>
            </div>
          </div>

          <!-- Profile cta (call to action) -->
          <span class="cta">
            Passa a
          </span>
        </div>

        <!-- Component suggestions -->
        <Suggestions/>

        <footer>
          &#169; 2022 instagram from meta
        </footer>
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
    padding-left: 40px;

    #container-account, .container-profile {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    // Container account
    #container-account {
      width: 100%;
      padding: 20px 0;
      // debug
      // height: 100px;
      // background-color: darkviolet;

      .container-profile {
        // Profile picture
        .picture {
          margin-right: 25px;
        }

        // Profile info 
        .profile-info {
          .user-name {
            color: #262626;
            font-weight: 600;
            margin-bottom: 5px;
          }

          .name {
            color: #8E8E8E;
          }
        }

        .picture, .user-name {
          cursor: pointer;
        }
      }
    }

    footer {
      text-transform: uppercase;
      color: #C7C7C7;
    }
  }
}

</style>