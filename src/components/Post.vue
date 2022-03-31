<template>
    <section class="post">
        <div class="header-post">

            <div>
                <img :src="post.profile_picture" :alt="post.profile_name" class="profile-picture-post">
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
                <img src="@/assets/svgexport-6.png" alt="heart icon">
                <img src="@/assets/svgexport-8.png" alt="comment">
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
                    <span class="show-all-comments">
                        Mostra tutti e 
                        <span> 
                            {{ post.comments.length }} 
                        </span> 
                        commenti 
                    </span>

                    <div v-for="comment, i in post.comments.slice(0,3)" :key="i" class="comment">
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
            <input type="text" placeholder="Aggiungi un commento..." class="input-comment" v-model="comment">
            <button @click.prevent="getComment(comment)" class="post-comment" :disabled="comment === ''">Pubblica</button>
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

      getComment(comment) {
          console.log('ciao', comment);
          this.comment = '';
      }
  }
}
</script>

<style scoped lang="scss">

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
</style>