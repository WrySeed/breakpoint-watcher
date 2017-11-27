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
  color: '#f2f2f2'
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
        { format: 'tablet', size: 1024 },
        { format: 'mobile', size: 640 }
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
