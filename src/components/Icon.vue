<template>
  <svg
    :height="height"
    :width="width"
    :class="'icon icon--' + glyph.id"
    :viewbox="glyph.viewBox">
      <use :xlink:href="'#' + glyph.id" />
  </svg>
</template>

<script>
export default {
  name: 'Icon',
  props: {
    glyph: {
      type: Object,
      required: true
    },
    height: String,
    width: String
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.icon
  transition: all $duration $easing
</style>
