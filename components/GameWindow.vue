<template>
    <div class="col-md">
      <div class="game-window">
        <form @submit.prevent="submitNumber" action="api">
          <div class="form-group">
            <label class="message" for="user-input"> {{ guess }} </label>
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
  data() {
    return {
      guess: 'Enter a number between 0 and 100'
    }
  },
  props: {
    enabledButtons: Boolean
  },
  methods: {
    async submitNumber() {
      let inputNumber = this.$refs['userInput'].value
      let response = await axios.post('/api/', {playerid: playerId, number: inputNumber})
      console.log(response.data)
      if (response.data.guess === "Bingo!!!") {
        this.$emit('playerWon')
        this.guess = response.data.guess
      }
      else if (response.data.guess === "higher") {
        this.guess = '↑ Higher ↑'
      }
      else if (response.data.guess === "lower") {
        this.guess = '↓ Lower ↓'
      }
      else {
        this.guess = 'Invalid input. Please try again.'
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
    padding: 25% 30%;
    margin-bottom: 20px;
    min-height: 300px;
  }

  .message {
    min-height: 36px;
  }
</style>