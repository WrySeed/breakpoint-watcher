<template>
    <section class="layout">
        <div class="layout__column">
            <h1 
                class="layout__title"
                :style="{ backgroundColor: currentBreakpoint.color }">{{ currentBreakpoint.format }}</h1>
            <div class="layout__inner">
                <div class="layout__box layout__box--list">
                    <p>Your defined breakpoints :</p>
                    <ul>
                        <breakpoint
                            v-for="breakpoint in breakpoints" :key="breakpoint.id"
                            v-bind="breakpoint"
                            v-on:delete="deleteBreakpoint(breakpoint)" />
                    </ul>
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
                    <!-- <input type="color"
                        v-model="newBreakpoint.color" /> -->
                    <div class="layout__box__footer">
                        <flex-button wording="Add breakpoint" />
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
import Breakpoint from '../components/Breakpoint'
import Field from '../components/Field'
import FlexButton from '../components/FlexButton'

import formatSizeIcon from '../assets/format-size.svg'
import codeTagsIcon from '../assets/code-tags.svg'

export default {
  name: 'Layout',
  props: {
    currentBreakpoint: Object,
    breakpoints: Array
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
  methods: {
    addNewBreakpoint: function () {
      let breakpoint = this.newBreakpoint

      this.breakpoints.push(breakpoint)
      this.newBreakpoint = {
        format: '',
        color: '',
        size: ''
      }
    },
    deleteBreakpoint: function (breakpoint) {
      this.breakpoints.splice(this.breakpoints.indexOf(breakpoint), 1)
    }
  }
}
</script>

<style lang="sass" scoped>
@import "../styles/variables"

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
    &__box
        margin-bottom: 1.6rem
        p
            font-size: 1.8rem
        &__footer
            @extend %clearfix
            .flex-button
                float: right
</style>
