<template>
  <div 
    class="field"
    :class="{ 
      'field--has-icon': icon,
      'field--focus': isFocused
    }">
    <icon 
      v-if="icon"
      :glyph="icon" />
    <input 
      ref="input"
      :type="type"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue($event.target.value)"
      @focus="toggleFocus('focus')"
      @blur="toggleFocus('blur')">
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
  data () {
    return {
      isFocused: false
    }
  },
  methods: {
    updateValue: function (value) {
      this.$emit('input', value)
    },
    toggleFocus: function (v) {
      if (v === 'blur') {
        this.isFocused = false
      } else if (v === 'focus') {
        this.isFocused = true
      }
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
  margin-bottom: 1.5rem
  font-size: 0
  input
    flex: auto
    height: 4.4rem
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
      width: 3rem
      height: 3rem
      margin: .7rem
      fill: $black-a35
    #{$root}__border
      width: calc(100% - 4.4rem)

  &--focus
    .icon
      fill: black
    #{$root}__border::after
      left: 0
      width: 100%
      opacity: 1
</style>
