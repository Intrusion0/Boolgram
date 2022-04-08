<template>
    <section id="container-stories">

        <div v-if="stories.length === 0" class="container-default-stories">
          <div id="skeleton-loading">
            <img src="@/assets/spinner.gif" alt="loading gif">
          </div>

          <div v-for="(defaultStory, j) in storiesDefault" class="story" :key="j">
            <div class="profile-picture-default">
              
            </div>
          </div>
        </div>

        <Story v-else
        v-for="story, i in stories"
        :key="i"
        :details="story"
        @showStory="showStory"
        />

        <StoryModal v-if="storyModal"
        :story="story"
        @closeModalStory="closeModalStory"
         />
    </section>
</template>

<script>
import axios from 'axios';
import Story from './Story.vue';
import StoryModal from './StoryModal.vue';

export default {
  name: 'Stories',
  components: {
    Story,
    StoryModal,
  },

  data() {
    return {
      stories: [],
      storiesDefault: [1,2,3,4,5,6,7,8],
      imageStory: '',
      storyModal: false,
      story: []
    }
  },

  created() {
    this.getStories();
  },

  methods: {
    getStories() {
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles')
          .then((r) => {
            setTimeout(() => { // Delay simulation called api
              this.stories = r.data;
            }, 1500);
          })
          .catch((e) => console.error(e));
    },

    closeModalStory() {
      const body = document.querySelector("body");
      body.style.overflow = "auto";

      this.storyModal = false;
    },

    showStory(value) {
      const body = document.querySelector("body");
      body.style.overflow = "hidden";

      this.story = value;
      this.storyModal = true;
    }
  }
}
</script>

<style scoped lang="scss">

// Container stories
#container-stories {
    width: 100%;
    border: 2px solid #efefef;
    border-radius: 3px;
    padding: 16px 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
}

.container-default-stories {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  #skeleton-loading {
    width: 100%;
    display: block;
    text-align: center;

    img {
      width: 5%;
      margin-bottom: 10px;
    }
  }

  .profile-picture-default {
    height: 50px;
    width: 50px;
    min-width: 50px;
    border: 1px solid #cbcbcb;
    border-radius: 50%;
    background-color: #ededed;
  }
}

.container-stories-modal {

  img {
    width: 100%;
    height: 700px;
    object-fit: cover;
  }
}


</style>