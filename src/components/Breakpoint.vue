<template>
  <li class="breakpoint">
    <span class="breakpoint__dot color-dot"
      :style="{ backgroundColor: color }"></span>
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

.breakpoint
  display: flex
  align-items: center
  color: $black-a75
  border-bottom: 1px solid $black-a15
  font-size: 0
  line-height: 6rem
  .color-dot
    flex: intial
  &__info
    flex: auto
    padding: 0 1.6rem
    font-size: 1.6rem
  &__delete
    flex: intial
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
