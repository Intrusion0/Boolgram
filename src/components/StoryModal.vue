<template>
    <div>
        <transition name="model">
        <div class="modal-mask">
            <div class="modal-wrapper">

                <span class="close-modal" @click.prevent="closeModalStory">
                    &#10005;
                </span>

                <div class="modal-dialog">
                    <div class="modal-content">
                        
                        <div class="modal-body">

                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                                </div>
                                <div class="carousel-inner">
                                    <div class="carousel-item active" data-bs-interval="35000">
                                        <video id="myVideo" class="story" controls autoplay muted>
                                            <!-- <source src="@/assets/video1.mp4" type="video/mp4"> -->
                                            <source src="@/assets/video3-full-hd.mp4" type="video/mp4">
                                        </video>
                                    </div>
                                    <div class="carousel-item" data-bs-interval="5000">
                                        <img src="@/assets/2.jpg" alt="panorama">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="5000">
                                        <img src="@/assets/husky.jpg" alt="husky">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="5000">
                                        <img src="@/assets/1.jpg" alt="panorama2">
                                    </div>
                                    <div class="carousel-item" data-bs-interval="7000">
                                        <img src="@/assets/pikagif.gif" alt="pikachu">
                                    </div>
                                </div>
                                <button @click.prevent="pauseVideo" class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button @click.prevent="pauseVideo" class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <div class="header-story">
                                <img :src="story.profile_picture" alt="profile picture">

                                <span>
                                    {{ story.profile_name }}
                                </span>

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

export default {
  name: 'Post',
  props: {
    story: Object
  },

  data() {
    return {
        showVideo: false
    }
  },

  methods: {
      closeModalStory() {
          this.$emit('closeModalStory');
      },

      pauseVideo() {
        var vid = document.querySelector("#myVideo"); 
        // var storyActive = document.querySelector("#storyVideo");
        var btnVideo = document.querySelector('button');

        

        if (btnVideo.hasAttribute("data-bs-slide-to", "0") && btnVideo.classList == "active") {
            vid.play();
            console.log('Current time video', vid.currentTime);
            console.log('Durata totale', vid.duration);
        } else {
            vid.pause(); 
        }
      }
    
  }
}
</script>

<style scoped lang="scss">
.modal-mask {
    background-color: #1a1a1a;
}

.modal-dialog {
    max-width: 32%;

    .modal-content {
    border-radius: 12px;
    
        .modal-body {
            display: block;

            #carouselExampleIndicators, .carousel-inner, .carousel-item {
                height: 100%;
            }

            .carousel-indicators {
                top: 6px;
                bottom: 93%;
            }

            .header-story {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                background: -webkit-linear-gradient(top,rgba(38,38,38,.8) 0%,rgba(38,38,38,0) 100%);
                padding: 30px 16px 32px;
                display: flex;
                align-items: center;
                width: 100%;

                img {
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                }

                span {
                    color: #fff;
                    font-size: 16px;
                    font-weight: 400;
                    padding-left: 10px
                }
            }

            .story, img {
                height: 100%;
                width: 100%;
                position: relative;
                object-fit: cover;
            }

        }
    }
}


</style>