<template>
  <div id="app">
    <watcher-layout 
      :currentBreakpoint="currentBreakpoint"
      :breakpoints="breakpoints"/>
  </div>
</template>

<script>
import WatcherLayout from './components/WatcherLayout'

const defaultBreakpoint = {
  format: 'Desktop',
  color: '#ef5350'
}

export default {
  name: 'app',
  components: {
    WatcherLayout
  },
  data () {
    return {
      currentBreakpoint: {
        format: defaultBreakpoint.format,
        color: defaultBreakpoint.color
      },
      breakpoints: [
        { format: 'tablet', size: 1024, color: '#9ccc65' },
        { format: 'mobile', size: 640, color: '#ffee58' }
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
