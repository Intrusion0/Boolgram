<template>
    <section id="container-posts">
        <div class="container-post">
            CIAO SONO POST 1
        </div>

        <div class="container-post">
            CIAO SONO POST 2
        </div>

        <div class="container-post">
            CIAO SONO POST 3
        </div>
    </section>
</template>

<script>
export default {
  name: 'Posts',

  data() {
    return {

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
        // debug
        height: 300px;
        background-color: chocolate;
    }
}

</style>