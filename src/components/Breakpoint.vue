<template>
  <li class="breakpoint">
    <span class="breakpoint__dot color-dot"
      :style="{ backgroundColor: color }"></span>
    <span class="breakpoint__info">{{ niceFormat }} : {{ size }} PX</span>
    <icon :glyph="closeIcon" />
  </li>
</template>

<script>
import Icon from '../components/Icon'

import closeIcon from '../assets/close.svg'

export default {
  name: 'Breakpoint',
  props: {
    format: String,
    color: String,
    size: Number
  },
  components: {
    Icon
  },
  data () {
    return { closeIcon }
  },
  computed: {
    niceFormat: function () {
      return this.format.charAt(0).toUpperCase() + this.format.slice(1, this.format.length).toLowerCase()
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables.sass"

.color-dot
  position: relative
  display: inline-block
  vertical-align: middle
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

.breakpoint
  color: $black-a75
  border-bottom: 1px solid $black-a15
  line-height: 6rem
  &__dot
    margin-right: 1.6rem
  &__info
    display: inline-block
    vertical-align: middle
    max-width: calc(100% - 5rem)
</style>
