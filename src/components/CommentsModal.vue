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

                      <!-- Post description -->
                      <div class="post-description-modal">
                        <div class="ms-container-left">
                          <img :src="post.profile_picture" :alt="post.profile_name" class="profile-picture-comment">
                        </div>

                        <div class="ms-container-right">
                          <span>
                            {{ post.profile_name }}
                          </span>
                          <p>
                            {{ post.post_text }}
                          </p>
                          <div class="w-100">
                            <span>
                              10 m
                            </span>
                          </div>
                        </div>
                      </div>

                      <!-- Comments -->
                      <ul>
                        <li v-for="comment, i in comments" :key="'B' + i" class="comment-modal">

                          <div class="ms-container-left">
                            <img src="@/assets/default-user.png" alt="default user icon">
                          </div>

                          <div class="ms-container-right">
                            <span>
                              {{ comment.username }} 
                            </span>
                            <p>
                              {{ comment.text }}
                            </p>
                            <div class="w-100">
                              <span>  <!-- Metodo per ritornare un elemento random da un array |||| IO LO METTEREI FISSO, so che non è bellissimo, però si evita il bug dell'aggiornamento dei dati.. purtroppo non avendo i dati nell'api è così.. -->
                                {{ dateComments[Math.floor(Math.random()*dateComments.length)] }} m
                              </span>
                              <span> <!-- Metodo per ritornare un elemento random da un array -->
                                Piace a {{ likesComments[Math.floor(Math.random()*likesComments.length)] }} persone
                              </span>
                              <span>
                                Rispondi
                              </span>
                            </div>
                          </div>
                          <div class="container-heart">
                            <span>
                              <i class="far fa-heart like-comment"></i>
                            </span>
                          </div>
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
                        <img src="@/assets/svgexport-13.png" alt="emoji icon">
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
        dateComments: [],
        likesComments: []
    }
  },

  mounted() {
    this.getRandomInt();
  },

  methods: {
      getDate(date) {
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
          
          if (this.$el.querySelector('.post-actions div .heart-bg')) {
              this.$el.querySelector('.post-actions div .fa-heart').classList.remove('fas','heart-bg');
              this.$el.querySelector('.post-actions div .fa-heart').classList.add('far');
              this.post.likes.splice(this.post.likes.length-1, 1);
          } else {
              this.$el.querySelector('.post-actions div .fa-heart').classList.remove('far');
              this.$el.querySelector('.post-actions div .fa-heart').classList.add('fas','heart-bg');
              this.post.likes.push(like);
          }
      },

      addComment(comment) {
          this.post.comments.push(
            {
              text: comment,
              username: this.post.profile_name
            }
          );
          this.comment = '';
      },

      closeModal() {
          this.$emit('closeModal');
      },

      getRandomInt() {
        for (let i = 0; i < this.comments.length; i++) {
          this.dateComments.push(Math.floor(Math.random() * 60)); // Numero random per la data del commento
          this.likesComments.push(Math.floor(Math.random() * 150)); // Numero random per i like del commento
        }
        console.log(this.dateComments);
        console.log(this.likesComments);
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

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

.container-info-post {
  width: 45%;
  overflow: auto;

  .header-comments, .main-comments {
    padding: 14px 16px;
  }

  .header-comments {
    background-color: #fff;
    // height: 60px;
    max-height: 60px;
    border-bottom: 1px solid #efefef;
    border-top: 0;
    border-left: 0;
    border-right: 0;
    margin: 0;
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
      height: calc(100% - 162.5px);
      padding: 14px 16px;
      overflow: auto;

      .post-description-modal, li {
        display: flex;
        flex-wrap: wrap;
        padding: 12px 0;

        .ms-container-left {
          width: 50px;
          
          img {
            width: 32px;
            height: 32px;
            border-radius: 50%;

            &.profile-picture-comment {
              border: 3px solid #c62d90;
              padding: 1px;
              cursor: pointer;
            }
          }
        }

        .ms-container-right {
          width: calc(100% - 80px);
          display: flex;
          flex-wrap: wrap;

          span, p {
            font-size: 14px;
            color: #262626;
          }
  
          span {
            font-weight: 600;
          }
  
          p {
            font-weight: 400;
            margin-left: 6px;
          }
  
          div {
            margin: 8px 0 4px;
  
            span {
              font-size: 12px;
              font-weight: 400;
              margin-right: 12px;
              color: #8e8e8e;

              &:nth-child(2), &:nth-child(3) {
                font-weight: 600;
                cursor: pointer;
              }
            }
          }
        }
      }

      .container-heart {
        width: 30px;
        text-align: right;

        .like-comment {
          font-size: 12px;
          cursor: pointer;
        }
      }

      ul {
        list-style: none;
        padding: 0;
  
        li {
          padding-bottom: 0;
        }
      }

      &::-webkit-scrollbar {
        display: none;
      }
    }

    .footer-comments {
      height: 156.5px;
      background-color: #fff;
      border-top: 1px solid #efefef;

      .post-actions {
        display: flex;
        justify-content: space-between;
        padding: 10px 16px;
        color: #000;

        img.cta-modal {
          margin-right: 16px;
        }

        img {
          cursor: pointer;
        }

        div {
            display: flex;
            align-items: center;

            i {
                font-size: 24px;
                margin-right: 16px;
                cursor: pointer;
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

        & > span {
          margin-left: 5px;
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