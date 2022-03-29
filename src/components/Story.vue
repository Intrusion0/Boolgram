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
.story {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;

    .profile-picture {
        margin-bottom: 5px;
        border: 3px solid #c62d90;
        padding: 1px;
    }

    span {
        display: block;
        text-align: center;
        font-size: 14px;
        max-width: 65px;
        overflow: hidden;
        text-overflow: ellipsis;
        color: #262626;
    }
}
</style>