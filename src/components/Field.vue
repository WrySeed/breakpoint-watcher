<template>
  <div 
    class="field"
    :class="{ 'field--has-icon': icon }">
    <icon 
      v-if="icon"
      :glyph="icon" />
    <input 
      ref="input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      v-on:input="updateValue($event.target.value)">
    <span class="field__border"></span>
  </div>
</template>

<script>
import Icon from '../components/Icon'

export default {
  name: 'Field',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    value: null,
    icon: Object
  },
  components: {
    Icon
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.field
  $root: &
  position: relative
  display: flex
  align-items: center
  margin-bottom: 13px
  font-size: 0
  input
    flex: auto
    height: 6rem
    border: 0 none
    outline: none
    font: $main-font
    &::placeholder
      color: $black-a35
      opacity: 1
  &__border
    position: absolute
    bottom: -3px
    right: 0
    width: 100%
    height: 3px
    background-color: $black-a15
    &:after
      position: absolute
      top: 0
      bottom: 0
      left: 50%
      width: 0
      background-color: black
      transition: all $duration $easing
      opacity: 0
      content: ""

  &--has-icon
    .icon
      flex: initial
      width: 3.6rem
      height: 3.6rem
      margin: 1.2rem
      fill: $black-a35
    #{$root}__border
      width: calc(100% - 6.2rem)
</style>
