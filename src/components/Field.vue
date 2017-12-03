<template>
  <div 
    class="field"
    :class="{ 
      'field--focus': isFocused,
      'field--has-icon': icon
    }">
      <icon 
        v-if="icon"
        :glyph="icon" />
      <input 
        ref="input"
        :type="type"
        :placeholder="placeholder"
        :value="value"
        v-on:input="updateValue($event.target.value)"
        v-on:focus="testFocus()"
        v-on:blur="testBlur()">
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
    },
    testFocus: function () {
      this.isFocused = true
    },
    testBlur: function () {
      if (this.value === '') {
        this.isFocused = false
      }
    }
  },
  data () {
    return {
      isFocused: false
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.field
  $root: &
  position: relative
  margin-bottom: 13px
  font-size: 0
  input
    display: inline-block
    vertical-align: middle
    width: 100%
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
      display: inline-block
      vertical-align: middle
      width: 3.6rem
      height: 3.6rem
      margin: 1.2rem
      fill: $black-a35
    input,
    #{$root}__border
      width: calc(100% - 6.2rem)

  &--focus
    .icon
      fill: black
    #{$root}__border::after
      left: 0
      width: 100%
      opacity: 1
</style>
