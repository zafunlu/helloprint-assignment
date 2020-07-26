<template>
  <div class="container">
    <div class="row">
      <HeaderBanner />
    </div>
    <div class="row">
      <GameWindow :enabledButtons="!playerWon" v-on:playerWon="handlePlayerWon"/>
      <GameWindow :enabledButtons="!playerWon" v-on:playerWon="handlePlayerWon"/>
      <GameWindow :enabledButtons="!playerWon" v-on:playerWon="handlePlayerWon"/>
    </div>
  </div>
</template>

<script>
import GameWindow from '~/components/GameWindow'
import HeaderBanner from '~/components/HeaderBanner'

export default {
  components: {
    GameWindow,
    HeaderBanner
  },
  data() {
    return {
      playerWon: false
    }
  },
  head() {
    return {
      title: 'HelloPrint Assignment'
    }
  },
  methods: {
    handlePlayerWon() {
      this.playerWon = true
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
