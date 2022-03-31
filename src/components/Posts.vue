<template>
    <section id="container-posts">

      <section v-if="posts.length === 0" class="post">
        <div class="header-post-default">
            <div></div> <!-- Profile picture default -->
            <div> <!-- Info profile default -->
              <span>
                
              </span>

              <span>

              </span>
            </div>
        </div>

        <!-- post image default  -->
        <div class="post-image-default"></div>
      </section>

        <Post v-else
        v-for="post, i in posts"
        :key="i"
        :post="post"
        />
    </section>
</template>

<script>
import axios from 'axios';
import Post from './Post.vue';

export default {
    name: 'Posts',
    components: { Post },


  data() {
    return {
        posts: [],
    }
  },
  created() {
    this.getPosts();
  },

  methods: {
    getPosts() {
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/posts')
          // .then((r) => console.log(r = r.data))
          .then((r) => {
            setTimeout(() => {
              this.posts = r.data
              console.log(this.posts);
            }, 40000000);
          })
          .catch((e) => console.error(e));
    }
  }
}
</script>

<style scoped lang="scss">
$color-default: #ededed;

// Container stories
#container-posts {
    width: 100%;

    .container-post {
        margin: 50px 0;
    }
}

// Post default
.header-post-default {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 14px 16px;

  & div:first-child {
    height: 30px;
    width: 30px;
    min-width: 30px;
    border-radius: 50%;
    background-color: $color-default;
  }

  & div:nth-child(2) {
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    span {
      display: block;
      height: 12px;
      background-color: $color-default;
    }

    span:first-child {
      width: 30%;
      margin-bottom: 3px;
    }

    span:last-child {
      width: 20%;
    }
  }
}

.post-image-default {
  width: 100%;
  height: 650px;
  // background-image: linear-gradient(to right, #ededed , #d9d9d9);
  transition: .5s linear;
  animation: changeBackground;
  animation-iteration-count: infinite;
  animation-duration: 7s; 
}

@keyframes changeBackground { 
  0% {
    background-image: linear-gradient(to right, #ededed , #d9d9d9);
  }

  25% {
    background-image: linear-gradient(to right, #d9d9d9 , #cfcfcf);
  }

  50% {
    background-image: linear-gradient(to right, #cfcfcf , #c0c0c0);
  }

  75% {
    background-image: linear-gradient(to right, #d9d9d9 , #cfcfcf);
  }

  100% {
    background-image: linear-gradient(to right, #ededed , #d9d9d9);
  }
}

</style>