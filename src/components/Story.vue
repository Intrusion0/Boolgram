<template>
    <div class="story" @click.prevent="showStory()">
        <img :src="details.profile_picture" alt="profile-picture" class="profile-picture">
        <span> {{ details.profile_name }} </span>
    </div>
</template>

<script>
export default {
  name: 'Story',
  props: {
      details: Object
  },

  data() {
    return {

    }
  },

  methods: {
    showStory() {
      this.$emit('showStory', this.details);
    },
  }
}
</script>

<style scoped lang="scss">

</style>