<template>
  <div class="container">
    <div class="row">
      <header-banner />
    </div>
    <div class="row">
      <game-window />
      <game-window />
      <game-window />
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
