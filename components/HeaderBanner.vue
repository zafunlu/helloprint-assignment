<template>
    <div class="col">
        <div class="banner">
          <img src="~/assets/illustration.png" class="banner-img img-fluid">
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'HeaderBanner'
}
</script>

<style scoped>
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
</style>