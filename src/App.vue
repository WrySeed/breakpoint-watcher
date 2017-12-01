<template>
  <div id="app">
    <layout 
      :currentBreakpoint="currentBreakpoint"
      :breakpoints="orderedBreakpoints"/>
  </div>
</template>

<script>
import Layout from './components/Layout'

const defaultBreakpoint = {
  format: 'Desktop',
  color: '#ef5350'
}

export default {
  name: 'app',
  components: {
    Layout
  },
  computed: {
    orderedBreakpoints: function () {
      return this.breakpoints.sort((a, b) => {
        if (a.size > b.size) {
          return -1
        }

        if (a.size < b.size) {
          return 1
        }

        return 0
      })
    }
  },
  data () {
    return {
      currentBreakpoint: {
        format: defaultBreakpoint.format,
        color: defaultBreakpoint.color
      },
      breakpoints: [
        { format: 'mobile', size: 640, color: '#ffee58' },
        { format: 'tablet', size: 1024, color: '#9ccc65' }
      ]
    }
  }
}
</script>

<style lang="sass">
@import "./styles/reset.sass"
@import "./styles/variables.sass"

html
  font-size: 62.5%

#app
  display: table
  width: 100%
  height: 100vh
  background-color: $black-a5
  font: $main-font
</style>
