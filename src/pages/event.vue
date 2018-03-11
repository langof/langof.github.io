<template>
  <v-layout class="contain">
    <Toolbar></Toolbar>
    <text-list :scripts="scripts" :transcripts="transcripts" :langs="languages" :status="'target'"></text-list>
    <div style="display: none">
      {{ eventCode }}
      {{ target }}
    </div>
  </v-layout>
</template>

<script>
	import Toolbar from '@/components/Toolbar.vue'
	import TextList from '@/components/TextList.vue'
	import {DB} from '@/plugins/vuefire'

	export default {
		name: "event",
		data() {
			return {
				languages: this.$store.state.languages,
			}
		},
		firebase: function () {
			return {
				scripts: DB.ref(`/events/${this.eventCode}/speech`),
			}
		},
		computed: {
			eventCode() {
				return this.$route.hash.replace('#', '')
			},
			getCurrentLanguage() {
				return this.$store.state[this.status]
			},
			target() {
				this.$bindAsArray(
					'transcripts',
					DB.ref(`/events/${this.eventCode}/translated/${this.$store.state.target.code}`)
				)
				return this.$store.state.target
			}
		},
		components: {
			Toolbar,
			TextList
		}
	}
</script>

<style lang="scss" scoped>
  @import '../assets/css/_variables.scss';

  .contain {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-rows: $HEADER_HEIGHT 1fr;
  }
</style>