<template>
    <div class="col-md">
        <div class="game-window">
          <form @submit.prevent="submitNumber" action="api" method="get">
            <div class="form-group">
              <label for="user-input">Enter a number between 0 and 100 </label>
              <input type="text" class="form-control input-sm" id="user-input">
            </div>
            <button type="submit" class="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'GameWindow',
    methods: {
      startGame() {
        // let response = await axios.post('/api', {number: generateNumber})
      },
      async submitNumber() {
        let inputNumber = document.querySelector('#user-input').value;
        let response = await axios.post('/api/'+inputNumber+'', {number: inputNumber});
        console.log(response.data);
      },
      generateNumber: function () {
          return Math.floor(Math.random()*101)
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