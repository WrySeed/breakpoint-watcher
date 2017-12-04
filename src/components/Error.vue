<template>
  <div v-if="message" class="error">
    <div class="error__modal">
      <div class="error__modal__content">
        <icon class="error__modal__content__icon" :glyph="icons.alertIcon" />
        <p>{{ message }}</p>
        <button
          class="error__close"
          v-on:click="closeModal">
          <icon :glyph="icons.closeIcon" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '../components/Icon'

import closeIcon from '../assets/close.svg'
import alertIcon from '../assets/alert-circle.svg'

export default {
  name: 'Error',
  props: {
    message: String
  },
  components: {
    Icon
  },
  methods: {
    closeModal: function () {
      this.$emit('dismiss')
    }
  },
  data () {
    return {
      icons: {
        closeIcon,
        alertIcon
      }
    }
  }
}
</script>

<style lang="sass" scoped>
@import '../styles/variables'

.error
  position: fixed
  display: table
  top: 0
  left: 0
  width: 100%
  height: 100%
  background-color: rgba(0, 0, 0, .35)
  z-index: 666
  &__modal
    display: table-cell
    vertical-align: middle
    &__content
      display: flex
      width: 30rem
      margin: 0 auto
      padding: 1rem
      border-radius: .3rem
      color: white
      background-color: $error
      box-shadow: 0 2.5px 5px 0 rgba(0, 0, 0, .35)
      &__icon
        width: 2rem
        height: 2rem
        fill: white
      p
        flex: auto
        padding: 0 1rem
        font-size: 1.4rem
  &__close
    width: 2rem
    height: 2rem
    margin: 0
    padding: 0
    background: transparent
    border: 0 none
    outline: none
    cursor: pointer
    .icon
      width: 100%
      height: 100%
      fill: white
</style>

