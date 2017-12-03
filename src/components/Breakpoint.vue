<template>
  <li class="breakpoint">
    <color-dot :color="color" class="breakpoint__dot" />
    <span class="breakpoint__info">{{ niceFormat }} : {{ size }} PX</span>
    <button
      class="breakpoint__delete"
      v-on:click="remove">
      <icon :glyph="closeIcon" />
    </button>
  </li>
</template>

<script>
import Icon from '../components/Icon'
import ColorDot from '../components/ColorDot'

import closeIcon from '../assets/close.svg'

export default {
  name: 'Breakpoint',
  props: {
    format: String,
    color: String,
    size: Number
  },
  components: {
    Icon,
    ColorDot
  },
  data () {
    return { closeIcon }
  },
  computed: {
    niceFormat: function () {
      return this.format.charAt(0).toUpperCase() + this.format.slice(1).toLowerCase()
    }
  },
  methods: {
    remove: function () {
      this.$emit('delete')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.breakpoint
  display: flex
  align-items: center
  color: $black-a75
  border-bottom: 1px solid $black-a15
  font-size: 0
  line-height: 6rem
  &__info
    flex: auto
    padding: 0 1.6rem
    font-size: 1.6rem
  &__delete
    width: 3rem
    height: 3rem
    padding: 0
    background: transparent
    border: 0 none
    outline: none
    cursor: pointer
    .icon
      width: 100%
      height: 100%
      fill: $black-a35
</style>
