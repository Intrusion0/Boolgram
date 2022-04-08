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
                            <!-- <img src="@/assets/landscape.gif" class="img-story" alt="default image story 1"> -->
                            <video class="story" controls autoplay>
                                <source src="@/assets/video1.mp4" type="video/mp4">
                            </video>
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
            }

        }
    }
}


</style>