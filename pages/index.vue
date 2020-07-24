<template>
  <div class="container">
    <div class="row">
      <HeaderBanner />
    </div>
    <div class="row">
      <GameWindow />
      <GameWindow />
      <GameWindow />
    </div>
  </div>
</template>

<script>
import GameWindow from '~/components/GameWindow.vue'
import HeaderBanner from '~/components/HeaderBanner'

export default {
  components: {
    GameWindow,
    HeaderBanner
  },
  middleware: 'serverMiddleware',
  head() {
    return {
      title: 'HelloPrint Assignment'
    }
  }
}
</script>

<style>
  .container {
    padding: 50px;
    border: 1px solid rgb(170, 165, 165) !important;
    border-radius: 5px;
  }
</style>
