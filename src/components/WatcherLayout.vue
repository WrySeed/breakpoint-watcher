<template>
    <section class="layout">
        <div class="layout__column">
            <h1 
                class="layout__title"
                :style="{ backgroundColor: currentBreakpoint.color }">{{ currentBreakpoint.format }}</h1>
            <div class="layout__inner">
                <ul>
                    <breakpoint
                        v-for="breakpoint in breakpoints" :key="breakpoint.id"
                        v-bind="breakpoint"
                        />
                </ul>
            </div>
        </div>
    </section>
</template>

<script>
import Breakpoint from '../components/Breakpoint'

export default {
  name: 'WatcherLayout',
  props: {
    currentBreakpoint: Object,
    breakpoints: Array
  },
  components: {
    Breakpoint
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
    &__inner
        padding: 1.6rem
    &__title
        padding: 2.2rem
        font-size: 2rem
</style>
