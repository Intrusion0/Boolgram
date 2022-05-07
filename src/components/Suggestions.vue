<template>

  <section v-if="suggestedProfiles.length === 0" id="container-suggestions">

    <div class="suggestions-head">
      <span class="for-you">Suggerimenti per te</span>
      <span class="show-all">Mostra tutti</span>
    </div>

    <div class="suggestions" v-for="(defProf, i) in defaultSuggestedProfiles" :key="'A' + i">
        <div class="suggestions-default" >
            <div></div> <!-- Profile picture default -->
            <div> <!-- Info profile default -->
              <span></span>
              <span></span>
            </div>
        </div>
    </div>
  </section>

  <section v-else id="container-suggestions">
      <!-- SUGGESTIONS -->
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
          <div @click="follow(i)">
            <span v-if="idProfile.includes(i)" class="cta_follow cta">
              Segui gi&agrave;
            </span>

            <span v-else class="cta">
              Segui
            </span>
          </div>
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
      defaultSuggestedProfiles: [1,2,3,4,5,6,7,8],
      idProfile: []
    }
  },

  created() {
    this.getSuggestedProfiles();
  },

  methods: {
    getSuggestedProfiles() {
      axios.get('https://flynn.boolean.careers/exercises/api/boolgram/profiles')
          .then((r) => {
            setTimeout(() => { // Delay simulation called api
              this.suggestedProfiles = r.data;
            }, 1500);
          })
          .catch((e) => console.error(e));
    },

    follow(id) {

      if(!this.idProfile.includes(id)) {
        this.idProfile.push(id);
      } else {
        let index = this.idProfile.findIndex( el => el == id );
        this.idProfile.splice(index, 1);
      }
    },
  }
}
</script>

<style scoped lang="scss">

// Container stories
#container-suggestions {
  width: 100%;
  padding: 0 0 20px;

  .suggestions-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 0;

    .for-you {
      color: #8E8E8E;
      font-size: 14px;
      font-weight: 600;
    }

    .show-all {
      color: #262626;
      font-size: 13px;
      font-weight: 500;
      cursor: pointer;
    }
  }

  .suggestions {
    .suggestedProfile {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 10px 0;

      .cta_follow {
        color: #000;
      }

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