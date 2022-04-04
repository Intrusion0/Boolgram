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

      <div v-if="myModel">
        <transition name="model">
        <div class="modal-mask">
          <div class="modal-wrapper">

            <span id="close-modal" @click.prevent="closeModal">
              &#10005;
            </span>

          <div class="modal-dialog">
            <div class="modal-content">

            <!-- <div class="modal-header">
              <h2>Commenti</h2>
            </div> -->
            
            <div class="modal-body">
              <div class="container-image-post">
                <img :src="post.post_image" :alt="post.text">
              </div>

              <div class="container-info-post">
                <div class="header-comments">
                  <div class="header-post">
                    <div>
                        <img :src="post.profile_picture" :alt="post.profile_name" class="profile-picture-post">
                        <span>
                            {{ post.profile_name }}
                        </span>
                        <span id="dot">•</span>
                        <span>Segui gi&agrave;</span>
                    </div>

                    <div>
                        <img src="@/assets/svgexport-3.png" alt="three dots">
                    </div>
                  </div>
                </div>
                <div class="main-comments">

                  <div>
                    <ul>
                      <li v-for="comment, i in comments" :key="'B' + i" class="comment-modal">
                          <span class="username-comment-modal">
                              {{ comment.username }} 
                          </span> 
                          <p class="comment-text-modal">
                              {{ comment.text }}
                          </p>
                      </li>
                    </ul>
                  </div>

                  <div class="footer-comments">
                    TEST
                  </div>
                </div>
              </div>

            </div>
            </div>
          </div>
          </div>
        </div>
        </transition>
      </div>

        <!-- MODAL -->
        <!-- <modal name="container-comments">
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
        </modal> -->
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
        comments: [],
        post: [],
        myModel: false
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

    getComments(value1, value2) {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";

      this.comments = value1;
      this.post = value2;
      this.myModel = true;

      console.log(value1);
      console.log(value2);
    },

    closeModal() {
      const body = document.querySelector("body");
      body.style.overflow = "auto";

      this.myModel = false;
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

// MODAL
#close-modal {    
  color: #fff;
  font-size: 26px;
  font-weight: 600;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
}

.modal-content {
  height: 100%;
  border: 0;
  border-radius: 0 4px 4px 0;
  overflow: auto;
}

.modal-dialog {
  height: 100%;
  max-height: 100%;
  max-width: 65%;
  padding: 24px 64px;
  overflow: auto;
}

.modal-body {
  display: flex;
  padding: 0;
  background: transparent;
  overflow: auto;
}

.container-image-post {
  width: 55%;
  overflow: auto;
  // debug
  height: 100%;
  background-color: red;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.container-info-post {
  width: 45%;
  overflow: auto;
  // debug
  height: 100%;
  background-color: rgb(5, 82, 225);
  color: #fff;

  .header-comments, .main-comments {
    padding: 14px 16px;
  }

  .header-comments {
    background-color: #fff;
    // height: 60px;
    max-height: 60px;
    border-bottom: 1px solid #efefef;
    margin: 0;
    border: 0;
    border-radius: 0;

    .header-post {
      padding: 0;

      & div:first-child span {
        margin: 0;
        font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;

        &#dot {
          margin: 0 4px;
        }
      }

      & > div:first-child img {
        margin-right: 14px;
      }
    }
  }

  .main-comments {
    height: calc(100% - 60px);
    overflow: auto;

    ul {
      list-style: none;
      padding: 0;

      li {
        margin: 0 0 16px;
      }
    }
  }
}

.modal-wrapper {
  animation: IGCoreModalShow .25s ease-out;
}

@keyframes IGCoreModalShow {
  
  0% {
      opacity: 0;
      transform: scale(1.1);
  }
  
  100% {
      opacity: 1;
      transform: scale(1);
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