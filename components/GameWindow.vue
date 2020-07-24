<template>
    <div class="col-md">
        <div class="game-window">
          <form>
            <div class="form-group">
              <label for="user-input">Enter a number between 0 and 100</label>
              <input type="text" class="form-control input-sm" id="user-input">
            </div>
            <button type="submit" class="btn btn-success btn-block">Submit</button>
          </form>
        </div>
      </div>
</template>

<script>
export default {
    
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