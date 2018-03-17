<template>
  <v-toolbar flat height="54">
    <v-btn icon disabled>
      <!-- <v-icon dark></v-icon> -->
    </v-btn>
    <v-layout>
      <img class="logo" src="/logo.png">
    </v-layout>
    <v-btn icon :disabled="isRightIconExist()">
      <v-icon dark>{{ rightIcon }}</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<script>
	export default {
		props: ['rightIcon'],
		methods: {
			isRightIconExist: function () {
				return !this.rightIcon
			}
		}
	}
</script>

<style lang="scss" scoped>
  @import '../assets/css/_variables.scss';

  .toolbar {
    .layout {
      display: grid;
      .logo {
        height: $HEADER_HEIGHT - 24px;
        justify-self: center;
        align-self: center;
      }
    }
  }
</style>