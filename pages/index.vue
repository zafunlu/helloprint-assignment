<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <div class="banner">
          <img src="~/assets/illustration.png" class="banner-img img-fluid">
        </div>
      </div>
    </div>
    <div class="row">

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
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  .container {
    padding: 50px;
    border: 1px solid rgb(170, 165, 165) !important;
    border-radius: 5px;
  }

  .banner {
    height: 160px;
    margin-bottom: 20px;
    overflow: hidden;
  }

  @media screen and (max-width: 767px) {
    .banner {
      height: 100%;
      margin-bottom: 10%;
    }
  }

  .banner-img {
    min-width: 100%;
  }

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

  .game-window-x {
    margin: 0 auto;
    height: 250px;
    width: 250px;
    border: 1px solid grey;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

</style>
