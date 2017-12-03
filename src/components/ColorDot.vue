<template>
  <span class="color-dot"
      :style="{ backgroundColor: color }"></span>  
</template>

<script>
export default {
  name: 'ColorDot',
  props: {
    color: String
  }
}
</script>


<style lang="sass" scoped>
@import "../styles/variables"

.color-dot
  position: relative
  width: 3rem
  height: 3rem
  border: 1px solid #d9d9d9
  border-radius: 50%
  box-sizing: border-box
  &:after
    position: absolute
    top: 0
    bottom: 0
    right: 0
    left: 0
    background-color: transparent
    border: 2px solid white
    border-radius: 50%
    content: ""
</style>

