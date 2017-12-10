<template>
  <div id="app">
    <div class="wrapper">
      <div class="content">
        <error 
          :message="error"
          v-on:dismiss="setError('')" />
        <layout 
          :currentBreakpoint="currentBreakpoint"
          :windowWidth="windowWidth"
          :breakpoints="orderedBreakpoints"
          v-on:error="setError"
          v-on:checkSize="checkAppSize"/>
      </div>
    </div>
    <footer>
      Made with <a target="_blank" href="https://www.youtube.com/watch?v=WFWrRU1zSYQ" class="icon-link"><icon :glyph="icons.musicCircle" /></a> by <a target="_blank" href="https://github.com/WrySeed">@wryseed</a>
    </footer>
  </div>
</template>

<script>
import Config from './config'
import Error from './components/Error'
import Layout from './components/Layout'
import Icon from './components/Icon'

import musicCircle from './assets/music-circle.svg'

export default {
  name: 'app',
  components: {
    Layout,
    Error,
    Icon
  },
  data () {
    return {
      windowWidth: 0,
      error: '',
      currentBreakpoint: Config.defaultBreakpoint,
      breakpoints: [
        { format: 'mobile', size: 640, color: '#ffee58' },
        { format: 'tablet', size: 1024, color: '#9ccc65' }
      ],
      icons: {
        musicCircle
      }
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
        format: Config.defaultBreakpoint.format,
        color: Config.defaultBreakpoint.color
      }

      for (let breakpoint of this.breakpoints) {
        if (this.windowWidth <= breakpoint.size) {
          currentBreakpoint.format = breakpoint.format
          currentBreakpoint.color = breakpoint.color
        }
      }

      this.currentBreakpoint = currentBreakpoint
    },
    setError: function (e) {
      this.error = e
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
  background-color: $black-a5
  font: $main-font

.wrapper
  min-height: calc(100vh - 5.1rem)

.content
  display: table
  width: 100%
  height: calc(100vh - (5.1rem))
  padding: 5rem 0
  box-sizing: border-box

footer
  height: 3.6rem
  margin: 1.5rem 2rem 0
  padding: 1rem 0
  color: #7f7f7f
  border-top: 1px solid $black-a15
  box-sizing: border-box
  font-size: 1.1rem
  line-height: normal
  text-align: center
  a
    color: $ws-red
    text-decoration: none
  .icon-link
    position: relative
    top: -1px
    display: inline-block
    vertical-align: middle
    font-size: 0
    line-height: normal
    .icon--music-circle
      width: 1.4rem
      height: 1.4rem
      fill: $ws-red

@media #{$mobile}
  #app
    background-color: white

  .content
    display: block
    padding: 0
</style>
