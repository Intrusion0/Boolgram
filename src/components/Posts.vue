<template>
    <section id="container-posts">

      <section v-if="posts.length === 0" class="post">
        <div class="header-post-default">
            <div></div> <!-- Profile picture default -->
            <div> <!-- Info profile default -->
              <span></span>
              <span></span>
            </div>
        </div>

        <!-- post image default  -->
        <div class="post-image-default"></div>
      </section>

        <Post v-else
        v-for="post, i in posts"
        :key="i"
        :post="post"
        @getComments="getComments"
        />

        <!-- MODAL -->
        <modal name="container-comments">
            <div class="comments-container-modal">
              <h2>Commenti</h2>
                <div v-for="comment, i in comments" :key="'B' + i" class="comment-modal">
                    <span class="username-comment-modal">
                        {{ comment.username }} 
                    </span> 
                    <p class="comment-text-modal">
                        {{ comment.text }}
                    </p>
                </div>
            </div>
        </modal>
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
        comments: []
    }
  },
  created() {
    this.getPosts();
  },

  methods: {
    getPosts() {
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/posts')
          .then((r) => {
            setTimeout(() => { // Delay simulation called api
              this.posts = r.data
            }, 1500);
          })
          .catch((e) => console.error(e));
    },

    getComments(value) {
      this.comments = value;
      console.log(this.comments);
    }
  }
}
</script>

<style scoped lang="scss">

// Container stories
#container-posts {
    width: 100%;

    .container-post {
        margin: 50px 0;
    }
}

.comments-container-modal {
  padding: 10px 20px;
  font-size: 14px;

  h2 {
    border-bottom: 2px solid #ebebeb;
    padding-bottom: 5px;
    text-align: center;
    font-size: 30px;
    font-weight: 400;
    color: #727272;
  }

  .comment-modal {

    .username-comment-modal {
        font-weight: 600;
        margin-right: 5px;
  
        &:hover {
            cursor: pointer;
            text-decoration: underline;
        }
    }

    .comment-text-modal {
      display: inline-block;
      margin: 5px 0;
    }
  }
}

.post-image-default {
  width: 100%;
  height: 650px;
  transition: .5s linear;
  animation: changeBackground;
  animation-iteration-count: infinite;
  animation-duration: 7s; 
}

// Animation
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