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
        @getLikes="getLikes"
        />

        <CommentsModal v-if="commentsModal"
        :post="post"
        :comments="comments"
        @closeModal="closeModal"
        />

        <LikesModal v-if="likesModal"
        :likes="likes"
        @closeModalLikes="closeModalLikes"
        />
    </section>
</template>

<script>
import axios from 'axios';
import CommentsModal from './CommentsModal.vue';
import Post from './Post.vue';
import LikesModal from './LikesModal.vue';

export default {
    name: 'Posts',
    components: { Post, CommentsModal, LikesModal },


  data() {
    return {
        posts: [],
        comments: [],
        post: [],
        likes: [],
        commentsModal: false,
        likesModal: false
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
      this.commentsModal = true;

      console.log(value1);
      console.log(value2);
    },

    getLikes(value) {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";

      this.likes = value;
      this.likesModal = true;
    },

    closeModal() {
      const body = document.querySelector("body");
      body.style.overflow = "auto";

      this.commentsModal = false;
    },

    closeModalLikes() {
      const body = document.querySelector("body");
      body.style.overflow = "auto";

      this.likesModal = false;
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