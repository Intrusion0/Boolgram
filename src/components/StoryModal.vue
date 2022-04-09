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

                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" indicators controllers>
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <video class="story" controls>
                                            <!-- <source src="@/assets/video1.mp4" type="video/mp4"> -->
                                            <source src="@/assets/video2.mp4" type="video/mp4">
                                        </video>
                                    </div>
                                    <div class="carousel-item">
                                        <video class="story" controls>
                                            <!-- <source src="@/assets/video1.mp4" type="video/mp4"> -->
                                            <source src="@/assets/video3-full-hd.mp4" type="video/mp4">
                                        </video>
                                    </div>
                                    <div class="carousel-item">
                                        <video class="story" controls>
                                            <!-- <source src="@/assets/video1.mp4" type="video/mp4"> -->
                                            <source src="@/assets/video4-full-hd.mp4" type="video/mp4">
                                        </video>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                            <!-- <img src="@/assets/landscape.gif" class="img-story" alt="default image story 1"> -->
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
    // height: 570px;

    .modal-content {
    border-radius: 12px;
    
        .modal-body {
            display: block;

            #carouselExampleControls, .carousel-inner, .carousel-item {
                height: 100%;
            }

            .header-story {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                background: -webkit-linear-gradient(top,rgba(38,38,38,.8) 0%,rgba(38,38,38,0) 100%);
                padding: 20px 16px 32px;
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

            .story {
                height: 100%;
                width: 100%;
                position: relative;
                object-fit: cover;
            }

        }
    }
}


</style>