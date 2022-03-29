<template>
    <section id="container-posts">
        <Post 
        v-for="post, i in posts"
        :key="i"
        :post="post"
        />
    </section>
</template>

<script>
import axios from 'axios';
import Post from './Post.vue';

export default {
    name: 'Posts',
    components: { Post },


  data() {
    return {
        posts: [],
    }
  },
  created() {
    this.getPosts();
  },

  methods: {
    getPosts() {
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/posts')
          // .then((r) => console.log(r = r.data))
          .then((r) => this.posts = r.data)
          .catch((e) => console.error(e));
    }
  }
}
</script>

<style scoped lang="scss">

// Container stories
#container-posts {
    width: 100%;

    .container-post {
        margin: 50px 0;
    }
}

</style>