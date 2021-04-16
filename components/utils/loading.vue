<template>
  <div class="container_lod">
    <img class="rotate_lod" src="../../static/Loader.svg" />
    <!-- <h3 class="welcome-title">Loading your favorite pokemons</h3> -->
  </div>
</template>
<script>
export default {}
</script>
<style>
.container_lod {
  text-align: center;
}

.rotate_lod {
  top: 50%;
  left: 50%;
  margin-top: 30vh;
  -webkit-animation: spin 1s linear infinite;
  -moz-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
@-moz-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}
.welcome-title {
  font-family: 'Lato';
  margin-top: 30px;
  size: 26px;
}
</style>

