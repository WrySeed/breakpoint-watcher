<template>
  <section class="layout">
    <div class="layout__column">
      <h1 
        class="layout__title"
        :style="{
          backgroundColor: currentBreakpoint.color,
          color: breakpointWordColor }">{{ windowStatus }}</h1>
      <div class="layout__inner">
        <div class="layout__box layout__box--list">
          <p>Your defined breakpoints :</p>
          <transition name="breakpoints-fade" mode="out-in">
            <transition-group 
              v-if="breakpoints.length > 0"
              name="breakpoint"
              class="breakpoints"
              tag="ul">
              <breakpoint
                v-for="breakpoint in breakpoints" :key="breakpoint.size"
                v-bind="breakpoint"
                v-on:delete="deleteBreakpoint(breakpoint)" />
            </transition-group>
            <p v-else class="warning">There are no breakpoints yet.</p>
          </transition>
        </div>
        <form 
          class="layout__box layout__box--form"
          v-on:submit.prevent="addNewBreakpoint">
          <p>Add a new breakpoint :</p>
          <field 
            type="text"
            placeholder="Screen or device format"
            :icon="icons.formatSize"
            v-model="newBreakpoint.format" />
          <field
            type="text"
            placeholder="Screen or device size"
            :icon="icons.codeTags"
            v-model.number="newBreakpoint.size" />
          <div class="layout__box__footer">
            <flex-button wording="Add breakpoint" />
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import Config from '../config'
import Breakpoint from '../components/Breakpoint'
import Field from '../components/Field'
import FlexButton from '../components/FlexButton'

import formatSizeIcon from '../assets/format-size.svg'
import codeTagsIcon from '../assets/code-tags.svg'

export default {
  name: 'Layout',
  props: {
    currentBreakpoint: Object,
    breakpoints: Array,
    windowWidth: Number
  },
  components: {
    Breakpoint,
    Field,
    FlexButton
  },
  data () {
    return {
      newBreakpoint: {
        format: '',
        size: '',
        color: ''
      },
      icons: {
        formatSize: formatSizeIcon,
        codeTags: codeTagsIcon
      }
    }
  },
  computed: {
    windowStatus: function () {
      return `${this.currentBreakpoint.format.charAt(0).toUpperCase() + this.currentBreakpoint.format.slice(1).toLowerCase()} : ${this.windowWidth} PX`
    },
    breakpointWordColor: function () {
      let color = this.currentBreakpoint.color.substring(1)
      let r = parseInt(color.substr(0, 2), 16)
      let g = parseInt(color.substr(2, 2), 16)
      let b = parseInt(color.substr(4, 2), 16)

      return (((r * 0.299) + (g * 0.587) + (b * 0.114)) > 186) ? 'black' : 'white'
    }
  },
  methods: {
    addNewBreakpoint: function () {
      let breakpoint = this.newBreakpoint

      try {
        if (breakpoint.format === '') {
          throw new Error('Please give your new breakpoint a name.')
        }

        if (typeof breakpoint.size !== 'number') {
          throw new Error('Please use a number to define your new breakpoint.')
        }

        if (breakpoint.size > Config.maximumDeviceSize || breakpoint.size < Config.minimumDeviceSize) {
          throw new Error(`Please use a valid size for your new breakpoint, minimum is ${Config.minimumDeviceSize}px and maximum ${Config.maximumDeviceSize}px.`)
        }

        if (this.breakpoints.filter(e => e.size === breakpoint.size).length > 0) {
          throw new Error(`A breakpoint with size size ( ${breakpoint.size} PX ) is already defined. Pick another one !`)
        }

        breakpoint.color = '#' + Math.floor(Math.random() * 16777215).toString(16)
        this.breakpoints.push(breakpoint)
        this.newBreakpoint = {
          format: '',
          color: '',
          size: ''
        }
        this.$emit('checkSize')
      } catch (e) {
        this.$emit('error', e.message)
      }
    },
    deleteBreakpoint: function (breakpoint) {
      this.breakpoints.splice(this.breakpoints.indexOf(breakpoint), 1)
      this.$emit('checkSize')
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

.warning
  margin: 1rem 0 0
  color: $warning

.breakpoints
  position: relative

.layout
  display: table-cell
  vertical-align: middle
  &__column
    width: 480px
    margin: 0 auto
    background-color: white
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, .35)
  &__inner
    padding: 2rem
  &__title
    padding: 2rem
    font-size: 1.8rem
  &__box
    margin-bottom: 3rem
    p
      margin-bottom: .5rem
      font-size: 1.5rem
    &__footer
      margin: 2rem 0 1rem
      @extend %clearfix
      .flex-button
        float: right
    &--form
      margin-bottom: 0 
      p
        margin-bottom: 1rem

.breakpoints-fade-enter-active,
.breakpoints-fade-leave-active
  transition: opacity $duration $easing

.breakpoints-fade-enter,
.breakpoints-fade-leave-to
  opacity: 0

.breakpoint-move
  transform: transition $duration
.breakpoint-enter
  opacity: 0
  transform: translateX(-3rem)
.breakpoint-leave-to
  opacity: 0
.breakpoint-leave-active
  position: absolute
  width: 100%

@media #{$mobile}
  .layout
    display: block
    &__column
      width: auto
      box-shadow: none
</style>
