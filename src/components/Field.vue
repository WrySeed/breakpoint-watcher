<template>
  <div 
    class="field"
    :class="{ 'field--focus': isFocused }">
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
export default {
  name: 'Field',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    placeholder: String,
    isFocused: {
      type: Boolean,
      default: false
    },
    value: null
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
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables.sass"

.field
    $root: &
    position: relative
    margin-bottom: 13px
    font-size: 0
    input
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

    &--focus
      #{$root}__border::after
        left: 0
        width: 100%
        opacity: 1
</style>
