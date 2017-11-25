<template>
    <section class="layout">
        <div class="layout__column">
            <h1 
                class="layout__title"
                :style="{ backgroundColor: currentBreakpoint.color }">{{ currentBreakpoint.format }}</h1>
        </div>
    </section>
</template>

<script>
export default {
  name: 'WatcherLayout',
  props: {
    currentBreakpoint: Object
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables.sass"

.layout
    display: table-cell
    vertical-align: middle
    &__column
        width: 480px
        margin: 0 auto
        background-color: white
        box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .35)
    &__title
        padding: 2.2rem
        font-size: 2rem
</style>
