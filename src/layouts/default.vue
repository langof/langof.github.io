<template>
  <!-- <v-app> -->
  <nuxt/>
  <!-- </v-app> -->
</template>

<style lang="scss">
@import '../assets/css/_variables.scss';

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
body {
  height: 100%;
  color: $Foreground;
  overflow: hidden;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
  margin: auto;
  padding: 0;
  #__nuxt,
  #__layout {
    margin: 0;
    display: flex;
    height: 100vh;
    width: 100vw;
    background: linear-gradient(135deg, rgb(48,35,174) 0%,rgb(200,109,215) 100%);
    overflow: hidden;
    justify-content: center;
    align-items: center;
  }
}

a {
  &:link,
  &:visited,
  &:hover,
  &:active {
    color: white;
  }
}
::-webkit-scrollbar {
  width: 0px; /* remove scrollbar space */
  background: transparent; /* optional: just make scrollbar invisible */
}
</style>
