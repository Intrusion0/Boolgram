<template>
    <section class="post">
        <div class="header-post">

            <div>
                <img :src="post.profile_picture" :alt="post.profile_name" class="profile-picture-post" @click.prevent="showStory">
                <span>
                    {{ post.profile_name }}
                </span>
            </div>

            <div>
                <img src="@/assets/svgexport-3.png" alt="three dots">
            </div>
        </div>

        <!-- post image  -->
        <div class="post-image">
            <img :src="post.post_image" :alt="post.text">
        </div>

        <!-- main post  -->
        <div class="main-post">
            <!-- post actions  -->
            <div class="post-actions">
                <i class="far fa-heart" @click.prevent="addLike()"></i>
                <i class="far fa-comment"></i>
                <img src="@/assets/svgexport-10.svg" alt="" class="share-post">
                <img src="@/assets/svgexport-12.svg" alt="" class="float-end">
            </div>

            <!-- post likes  -->
            <div class="likes" v-for="like, j in post.likes" :key="j">
                <img v-if="post.likes.length-1 == j" :src="like.profile_picture" :alt="like.username">

                <span v-if="post.likes.length-1 == j">
                    Piace a 
                    <span class="profile-name"> 
                        {{ like.username }} 
                    </span> 
                    <span v-if="post.likes.length > 1" class="total-likes"> 
                        <span id="text-likes"> 
                            e 
                        </span> 
                        {{ post.likes.length-1 }} altri 
                    </span>
                </span>
            </div>

            <!-- post description  -->
            <div class="post-description">
                <span> {{ post.profile_name }} </span> {{ post.post_text }}
            </div>

            <!-- post comments  -->
            <div class="comments-container">
                <span v-if="post.comments.length === 0" class="no-comment">Nessun commento</span>

                <div v-else-if="post.comments.length > 0 && post.comments.length <= 3">
                    <div v-for="comment, i in post.comments" :key="i" class="comment">
                        <span class="username-comment">
                            {{ comment.username }} 
                        </span> 
                        <p class="comment-text">
                            {{ comment.text }}
                        </p>
                    </div>
                </div>

                <div v-else>
                    <span class="show-all-comments" @click.prevent="showComments()">
                        Mostra tutti e 
                        <span> 
                            {{ post.comments.length }} 
                        </span> 
                        commenti 
                    </span>

                    <div v-for="comment, i in post.comments.slice(-3)" :key="i" class="comment">
                        <span class="username-comment">
                            {{ comment.username }} 
                        </span> 
                        <p class="comment-text">
                            {{ comment.text }}
                        </p>
                    </div>
                </div>
            </div>

            <!-- post date  -->
            <span class="post-date">
                {{ getDate(post.date.date) }}
            </span>

        </div>

        <!-- add comment  -->
        <div class="add-comment">
            <input @keyup.13="addComment(comment)" type="text" placeholder="Aggiungi un commento..." class="input-comment" v-model="comment">
            <button @click.prevent="addComment(comment)" class="post-comment" :disabled="comment === ''">Pubblica</button>
        </div>

    </section>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Post',
  props: {
      post: Object,
  },

  data() {
    return {
        comment: '',
        postComment: []
    }
  },

  methods: {
      getDate(date) {
          console.log(date);
          let finalDate = moment(date, "YYYYMMDD hh:mm:ss.ms").fromNow();

          if (finalDate === 'un giorno fa') {
              finalDate = '1 giorno fa';
          }

          return finalDate;
      },

      // Likes Method
      addLike() {

          let like = {
              profile_picture: 'http://loredanavistarini.it/wp-content/uploads/2020/01/136-1366211_group-of-10-guys-login-user-icon-png.png',
              username: this.post.profile_name
          };
          
          if (this.$el.querySelector('.heart-bg')) {
              this.$el.querySelector('.fa-heart').classList.remove('fas','heart-bg');
              this.$el.querySelector('.fa-heart').classList.add('far');
              this.post.likes.splice(this.post.likes.length-1, 1);
          } else {
              this.$el.querySelector('.fa-heart').classList.remove('far');
              this.$el.querySelector('.fa-heart').classList.add('fas','heart-bg');
              this.post.likes.push(like);
          }
      },

      addComment(comment) {
          console.log('ciao', comment);
          this.post.comments.push(
            {
              text: comment,
              username: this.post.profile_name
            }
          );
          this.comment = '';
          console.log(this.post.comments);
      },

      showComments() {
        this.$emit('getComments', this.post.comments, this.post);
      },

      hideComments() {
        this.$modal.hide('container-comments');
      },

      showStory() {
        this.$modal.show('container-story');
      },

      hideStory() {
        this.$modal.hide('container-story');
      }
  }
}
</script>

<style scoped lang="scss">

.post-actions {
    .share-post {
        position: relative;
        margin-left: 12px;
        bottom: 3px;
    }
}

.post-date {
    letter-spacing: .2px;
    color: #8e8e8e;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}

#text-likes {
    font-weight: 400;
}

.heart-bg {
    color: red;
}
</style>