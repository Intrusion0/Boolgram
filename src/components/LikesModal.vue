<template>
    <div>
        <transition name="model">
        <div class="modal-mask">
            <div class="modal-wrapper">

                <div class="modal-dialog">
                    <div class="modal-content">
            
                        <div class="modal-body">
                            <div class="container-title">
                                <span>
                                    Mi piace
                                </span>

                                <span class="close-modal" @click.prevent="closeModal">
                                    &#10005;
                                </span>
                            </div>

                            <div class="likes-list">
                                <ul>
                                    <li v-for="like, i in likes" :key="'M' + i">
                                        <div>
                                            <img :src="like.profile_picture" :alt="like.username">
                                        </div>

                                        <span>
                                            {{ like.username }}
                                        </span>

                                        <button>
                                            Segui
                                        </button>
                                    </li>
                                </ul>
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
    likes: Array
  },

  data() {
    return {
        comment: '',
    }
  },

  methods: {

      closeModal() {
          this.$emit('closeModalLikes');
      }
  }
}
</script>

<style scoped lang="scss">
.modal-dialog {
    max-width: 27%;
    height: 570px;

    .modal-content {
    border-radius: 12px;
    
    .modal-body {
        display: block;

            .container-title {
            width: 100%;
            height: 42px;
            display: block;
            border-bottom: 1px solid #dbdbdb;
        
            & span:first-child {
                display: block;
                text-align: center;
                font-size: 20px;
                font-weight: 600;
                color: #262626;
                padding-top: 6px;
            }
        
            .close-modal {
                color: #000;
                top: 2px;
                font-size: 24px;
            }
        }
        
        .likes-list {
            height: calc(100% - 42px);
            overflow: auto;

            ul {
                list-style: none;
                padding: 0 16px;
        
                li {
                    padding: 5px 0;
                    
        
                    div {
                        display: inline-block;

                        img {
                            width: 44px;
                            height: 44pX;
                            border-radius: 50%;
                            margin-right: 10px;
                        }
                    }

                    span, img {
                        cursor: pointer;
                    }

                    button {
                        background-color: #0095f6;
                        border: 1px solid transparent;
                        border-radius: 4px;
                        color: #fff;
                        font-size: 14px;
                        font-weight: 600;
                        padding: 5px 9px;
                        cursor: pointer;
                        float: right;
                        top: 5px;
                        position: relative;
                    }
                    
                }
            }

            &::-webkit-scrollbar {
                display: none;
            }
        }
    }
    }
}


</style>