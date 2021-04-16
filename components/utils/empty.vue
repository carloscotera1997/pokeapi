<template >
  <div >
    <h3 class="welcome-title">
      {{ title }}
    </h3>
    <p class="text">
      {{ message }}
    </p>
    <Button :color="'#F22539'" :name="nameButton" @clicked="clicked"></Button>
  </div>
</template>

<script>
import Button from '@/components/utils/Button'
export default {
  props: ['title', 'message', 'nameButton'],
  components: { Button },
  methods: {
    clicked() {
      this.$emit('go-to-home')
    },
  },
}
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');


.welcome-title {
  font-family: 'Lato';
  margin-top: 10px;
  margin-bottom: 10px;

  font-size: 26px;
}
.text {
  margin-bottom: 10px;
}
</style>