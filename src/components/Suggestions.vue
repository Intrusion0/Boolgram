<template>
    <section id="container-suggestions">
        <!-- SONO SUGGESTIONS -->
        <div class="suggestions-head">
          <span class="for-you">Suggerimenti per te</span>
          <span class="show-all">Mostra tutti</span>
        </div>

        <div class="suggestions">
          <div 
          v-for="suggestedProfile, i in suggestedProfiles"
          :key="i"
          class="suggestedProfile">
            <div class="container-profile">
              <div class="picture">
                <img :src="suggestedProfile.profile_picture" alt="profile-picture" class="profile-picture">
              </div>

              <div class="profile-info">
                <span> {{ suggestedProfile.profile_name }} </span>
              </div>
            </div>

            <!-- Profile cta (call to action) -->
            <span class="cta">
              Segui
            </span>
          </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Suggestions',

  data() {
    return {
      suggestedProfiles: [],
    }
  },

  created() {
    this.getSuggestedProfiles();
  },

  methods: {
    getSuggestedProfiles() {
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles')
          // .then((r) => console.log(r = r.data))
          .then((r) => this.suggestedProfiles = r.data)
          .catch((e) => console.error(e));
    }
  }
}
</script>

<style scoped lang="scss">

// Container stories
#container-suggestions {
  width: 100%;
  padding: 28px 0 20px;

  .suggestions-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;

    .for-you {
      color: #8E8E8E;
      font-size: 16px;
      font-weight: 600;
    }

    .show-all {
      color: #262626;
      font-size: 13px;
      font-weight: 600;
    }
  }

  .suggestions {
    .suggestedProfile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;

      .container-profile {
        display: flex;
        align-items: center;
        cursor: pointer;

        .picture {
          margin-right: 10px;

          img {
            width: 35px;
            height: 35px;
          }
        }

        .profile-info {
          span {
            font-weight: 600;
          }
        }
      }
    }
  }
}
</style>