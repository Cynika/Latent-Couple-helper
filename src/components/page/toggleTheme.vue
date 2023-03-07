<script setup>
import {StyleProvider, Themes} from '@varlet/ui'

let currentTheme = null
const toggleTheme = () => {
  currentTheme = currentTheme ? null : Themes.dark
  StyleProvider(currentTheme)
}
</script>

<template>
  <var-button outline @click="toggleTheme">🌙夜间模式</var-button>
</template>