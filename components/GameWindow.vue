<template>
    <div class="col-md">
        <div class="game-window">
          <form @submit.prevent="submitNumber" action="api">
            <div class="form-group">
              <label for="user-input">Enter a number between 0 and 100x</label>
              <input type="text" class="form-control input-sm" id="user-input" ref="userInput">
            </div>
            <button type="submit" class="btn btn-success btn-block" v-if="enabledButtons" >Submit</button>
            <button type="submit" class="btn btn-success btn-block" v-else disabled>Submit</button>
          </form>
        </div>
      </div>
</template>

<script>
import axios from 'axios'

// Hardcoded playerId generator to simulate what it actually should do
let playerId = Math.floor(Math.random() * 101)

export default {
  name: 'GameWindow',
  props: {
    enabledButtons: Boolean
  },
  methods: {
    async submitNumber() {
      let inputNumber = this.$refs['userInput'].value
      let response = await axios.post('/api/', {playerid: playerId, number: inputNumber})
      console.log(response.data)
      if (response.data.guess === "Bingo!!!") {
        alert(response.data.guess)
        this.$emit('playerWon')
      }
      else if (response.data.guess === "higher") {
        alert(response.data.guess)
      }
      else if (response.data.guess === "lower") {
        alert(response.data.guess)
      }
    }
  },
   mounted() {
    if (process.client) {
      window.localStorage.setItem('playerWon', false)
    }
  }
}
</script>

<style scoped>
    .game-window {
    color: grey;
    font-size: 12px;
    text-align: center;
    border: 1px solid rgb(202, 199, 199);
    border-radius: 3px;
    /* padding: 75px 100px; */
    padding: 25% 30%;
    margin-bottom: 20px;
  }
</style>