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
        />

        <!-- MODAL -->
        <modal name="container-story"
        :top="150"
        :height="700"
        :width="500">
            <div class="container-stories-modal">
              <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img src="@/assets/landscape.gif" class="d-block w-100" alt="default image story 1">
                  </div>
                  <div class="carousel-item">
                    <img src="@/assets/1.jpg" class="d-block w-100" alt="default image story 2">
                  </div>
                  <div class="carousel-item">
                    <img src="@/assets/2.jpg" class="d-block w-100" alt="default image story 3">
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
            </div>
        </modal>
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
      storiesDefault: [1,2,3,4,5,6,7,8],
      imageStory: '',
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