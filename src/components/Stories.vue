<template>
    <section id="container-stories">
        <!-- SONO STORIES -->
        <Story 
        v-for="story, i in stories"
        :key="i"
        :details="story"/>
    </section>
</template>

<script>
import axios from 'axios';
import Story from './Story.vue';

export default {
  name: 'Stories',
  components: {
    Story,
  },

  data() {
    return {
      stories: [],
    }
  },

  created() {
    this.getStories();
  },

  methods: {
    getStories() {
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles')
          // .then((r) => console.log(r = r.data))
          .then((r) => this.stories = r.data)
          .catch((e) => console.error(e));
    }
  }
}
</script>

<style scoped lang="scss">

// Container stories
#container-stories {
    width: 100%;
    border: 2px solid #efefef;
    padding: 20px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    // debug
    // height: 100px;
    // background-color: aquamarine;
}

</style>