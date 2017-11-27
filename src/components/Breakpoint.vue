<template>
  <li>{{ format }} : {{ size }}</li>
</template>

<script>
export default {
  name: 'Breakpoint',
  props: {
    format: String,
    color: String,
    size: Number
  }
}
</script>

<style lang="sass" scoped>

</style>
