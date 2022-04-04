<template>
    <div>
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

                    <div class="container-comments-modal">
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
                    <div class="post-actions">
                        <div>
                            <i class="far fa-heart cta-modal" @click.prevent="addLike()"></i>
                            <img src="@/assets/svgexport-7.svg" alt="comment icon" class="cta-modal">
                            <img src="@/assets/svgexport-10.svg" alt="share icon" class="cta-modal">
                        </div>
                        <img src="@/assets/svgexport-12.svg" alt="save post icon" class="float-end">
                    </div>

                    <!-- post likes  -->
                    <div class="likes" v-for="like, c in post.likes" :key="c">
                        <img v-if="post.likes.length-1 == c" :src="like.profile_picture" :alt="like.username">

                        <span v-if="post.likes.length-1 == c">
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
                    <span class="post-date">
                        {{ getDate(post.date.date) }}
                    </span>
                    <div class="add-comment">
                        <input @keyup.13="addComment(comment)" type="text" placeholder="Aggiungi un commento..." class="input-comment" v-model="comment">
                        <button @click.prevent="addComment(comment)" class="post-comment" :disabled="comment === ''">Pubblica</button>
                    </div>
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
</template>

<script>
import moment from 'moment';

export default {
  name: 'Post',
  props: {
      post: Object,
      comments: Array
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

      closeModal() {
          this.$emit('closeModal');
      }
  }
}
</script>

<style scoped lang="scss">

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
    padding: 0;

    .container-comments-modal {
      height: calc(100% - 156.5px);
      padding: 14px 16px;
      overflow: auto;

      ul {
        list-style: none;
        padding: 0;
  
        li {
          margin: 0 0 16px;
        }
      }
    }

    .footer-comments {
      height: 156.5px;
      background-color: #fff;
      border-top: 1px solid #efefef;

      .post-actions {
        display: flex;
        justify-content: space-between;
        padding: 8px 16px;
        color: #000;

        img.cta-modal {
          margin-right: 16px;
        }

        div {
            display: flex;
            align-items: center;

            i {
                font-size: 22px;
                margin-right: 16px;
            }
        }

      }

      .likes {
        padding: 0 16px;

        img {
          width: 20px;
          height: 20px;
          border-radius: 50%;
        }

        span {
          margin-left: 5px;
          color: #262626;
          font-size: 14px;
          font-weight: 400;
          font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;

          span {
            font-weight: 600;
          }

          #text-likes {
            font-weight: 400;
          }
        }
      }

      .post-date {
        padding: 0 16px;
      }
    }
  } 
}

.add-comment {
    margin-top: 14px;
    background-color: #fff;
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

</style>