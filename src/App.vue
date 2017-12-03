<template>
  <div id="app">
    <layout 
      :currentBreakpoint="currentBreakpoint"
      :windowWidth="windowWidth"
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
  data () {
    return {
      windowWidth: 0,
      currentBreakpoint: {
        format: defaultBreakpoint.format,
        color: defaultBreakpoint.color
      },
      breakpoints: [
        { format: 'mobile', size: 640, color: '#ffee58' },
        { format: 'tablet', size: 1024, color: '#9ccc65' }
      ]
    }
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
  methods: {
    checkAppSize: function () {
      this.windowWidth = document.documentElement.clientWidth
      let currentBreakpoint = {
        format: defaultBreakpoint.format,
        color: defaultBreakpoint.color
      }

      for (let breakpoint of this.breakpoints) {
        if (this.windowWidth <= breakpoint.size) {
          currentBreakpoint.format = breakpoint.format
          currentBreakpoint.color = breakpoint.color
        }
      }

      this.currentBreakpoint = currentBreakpoint
    }
  },
  mounted: function () {
    this.$nextTick(() => {
      window.addEventListener('resize', this.checkAppSize)
      this.checkAppSize()
    })
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
