<template>
  <div id="app">
    <Header/>
    <Homepage/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Homepage from './components/Homepage.vue';


export default {
  name: 'App',
  components: {
    Header,
    Homepage
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

$color-default: #ededed;

// General rules
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

p {
  margin-bottom: 0;
}

// Modal
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.65);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

// Clearfix / float
.clearfix::after {
  display: table;
  clear: both;
  content: "";
}

// Center placeholder
::-webkit-input-placeholder {
   color: #a7a7a7;
}

// General Container
.ms-container {
  width: 50%;
  margin: 0 auto;
}

// General rules for profile pictures
.profile-picture {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

// General rules for profiles
.container-profile {
  // Profile info 
  .profile-info {
    span {
      display: block;
    }
  }
}

// Profile cta
.cta {
  font-size: 13px;
  color: #0095f6;
  font-weight: 500;
  cursor: pointer;
}

// General rules -> component post
.post, .header-comments {
    margin: 25px 0;
    border: 2px solid #efefef;
    border-radius: 3px;

    .header-post {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 16px;

        & > div {
            display: flex;
            align-items: center;

            span {
                margin-left: 10px;
                color: #262626;
                font-size: 14px;
                font-weight: 600;
                cursor: pointer;
            }
        }

        & div:nth-child(2) {
            cursor: pointer;
        }

        .profile-picture-post {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 3px solid #c62d90;
            padding: 1px;
            cursor: pointer;
        }
    }

    .post-image {

        img {
            width: 100%;
            max-height: 650px;
        }
    }

    .main-post {
        font-size: 14px;
        padding: 20px 20px 12px;

        .post-actions {
            margin-bottom: 20px;

            i {
              font-size: 22px;
              cursor: pointer;
            }

            .far:hover {
              color: #8e8e8e;
            }

            i:first-child {
                margin-right: 15px;
            }
        }

        .likes > img {
            width: 20px;
            height: 20px;
            border-radius: 50%;
            margin-right: 10px;
            cursor: pointer;
        }

        .likes {
            display: flex;
            align-items: center;

            .profile-name, .total-likes {
                font-weight: 600;
                cursor: pointer;
            }
        }

        .post-description {
            font-size: 14px;
            margin: 10px 0;

            span {
                font-weight: 600;
                
                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }
        }

        .comments-container {
            font-size: 14px;

            .username-comment {
                font-weight: 600;
                margin-right: 5px;

                &:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
            }

            .show-all-comments {
                line-height: 18px;
                color: #8e8e8e;
                cursor: pointer;
            }

            .no-comment, .comment-text {
                display: inline-block;
            }

            .no-comment {
                color: #6d6e6e;
            }

            .comment {
                margin: 5px 0;
            }
        }
    }
}

.add-comment {
    border-top: 1px solid #efefef;
    padding: 15px 20px;
    background-color: #fafafa;
    display: flex;
    justify-content: space-between;

    .input-comment {
        width: 90%;
        border: transparent;
        background-color: #fafafa;
        font-size: 15px;

        &:focus-visible {
            outline: none;
        }
    }

    button {
        background: transparent;
        border: 0;
        font-size: 14px;
        font-weight: 600;
        color: #0095f6;
        cursor: pointer;

        &:disabled {
            color: #b2dffc;
        }
    }
}

// General rules -> component story
.story {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    .profile-picture {
        margin-bottom: 5px;
        border: 3px solid #c62d90;
        padding: 1px;
    }

    span {
        display: block;
        text-align: center;
        font-size: 14px;
        max-width: 60px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #262626;
    }
}

// Post/Suggestions default
.header-post-default, .suggestions-default {
  width: 100%;
  display: flex;
  align-items: center;
  padding: 14px 16px;

  & div:first-child {
    height: 30px;
    width: 30px;
    min-width: 30px;
    border-radius: 50%;
    background-color: $color-default;
  }

  & div:nth-child(2) {
    width: 100%;
    margin-left: 10px;
    display: flex;
    flex-direction: column;

    span {
      display: block;
      height: 12px;
      background-color: $color-default;
    }

    span:first-child {
      width: 30%;
      margin-bottom: 3px;
    }

    span:last-child {
      width: 20%;
    }
  }
}

.suggestions-default {
  padding: 14px 0;

  & div:nth-child(2) {

    span {
      border-radius: 3px;
    }

    span:first-child {
      width: 40%;
      margin-bottom: 3px;
    }

    span:last-child {
      width: 28%;
    }
  }
}

// Container post date
.post-date {
    letter-spacing: .2px;
    color: #8e8e8e;
    font-size: 10px;
    line-height: 12px;
    text-transform: uppercase;
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
}

.heart-bg {
    color: red;
}

</style>
