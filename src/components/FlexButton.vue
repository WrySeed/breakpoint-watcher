<template>
  <button type="submit" class="flex-button">
    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
      <path 
        d="M0,0 
          c0,0 50,0 100,0
          s0,50 0,100
          s50,0 -100,0
          s0,50 0,-100" />
    </svg>
    <span class="flex-button__wording">{{ wording }}</span>
  </button>
</template>

<script>
export default {
  name: 'FlexButton',
  props: {
    wording: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.flex-button
  position: relative
  padding: 1.6rem 2rem
  margin: 0
  background: transparent
  border: 0 none
  outline: none
  cursor: pointer
  svg
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    fill: $material-blue
    z-index: 10
  &__wording
    position: relative
    display: block
    color: white
    font: normal 1.8rem $roboto
    text-transform: uppercase
    z-index: 20
</style>
