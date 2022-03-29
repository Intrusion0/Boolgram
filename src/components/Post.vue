<template>
    <section class="post">
        <div class="header-post">

            <div>
                <img :src="post.profile_picture" :alt="post.profile_name" class="profile-picture-post">
                <span>
                    {{ post.profile_fullname }}
                </span>
            </div>

            <div>
                <img src="@/assets/svgexport-3.png" alt="three dots">
            </div>
        </div>

        <div class="post-image">
            <img :src="post.post_image" :alt="post.text">
        </div>

        <div class="main-post">
            <div class="post-actions">
                <img src="@/assets/svgexport-6.png" alt="heart icon">
                <img src="@/assets/svgexport-8.png" alt="comment">
            </div>

            <div class="likes" v-for="like, j in post.likes" :key="j">
                <img v-if="post.likes.length-1 == j" :src="like.profile_picture" :alt="like.username">
                <span v-if="post.likes.length-1 == j">Piace a <span class="profile-name"> {{ like.username }} </span> e <span class="total-likes"> {{ post.likes.length-1 }} altri </span></span>
            </div>

            <div class="post-description">
                <span> {{ post.profile_name }} </span> {{ post.post_text }}
            </div>

        </div>

        
    </section>
</template>

<script>
export default {
  name: 'Post',
  props: {
      post: Object,
  },

  data() {
    return {

    }
  }
}
</script>

<style scoped lang="scss">
.post {
    margin: 50px 0;
    border: 2px solid #efefef;

    .header-post {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 5px 10px;

        & > div {
            display: flex;
            align-items: center;

            span {
                margin-left: 10px;
            }
        }

        .profile-picture-post {
            width: 35px;
            height: 35px;
            border-radius: 50%;
            border: 3px solid #c62d90;
            padding: 1px;
        }
    }

    .post-image {

        img {
            width: 100%;
            max-height: 650px;
        }
    }

    .main-post {
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
        }

        .likes {
            display: flex;
            align-items: center;

            .profile-name, .total-likes {
                font-weight: 600;
            }
        }

        .post-description {
            margin: 20px 0;

            span {
                font-weight: 600;
            }
        }
    }
}


</style>