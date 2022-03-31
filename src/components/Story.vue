<template>
    <div class="story">
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
  }
}
</script>

<style scoped lang="scss">

</style>