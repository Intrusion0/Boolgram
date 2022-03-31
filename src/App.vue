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

// General rules
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;

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
.post {
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
        padding: 20px;

        .post-actions {
            margin-bottom: 20px;

            img:first-child {
                margin-right: 15px;
            }

            img:nth-child(2) {
                transform: rotate(90deg);
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
}

</style>
