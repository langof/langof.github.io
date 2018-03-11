<template>
  <v-layout class="contain">
    <Toolbar></Toolbar>
    <v-layout class="status">
      <v-btn round color="cyan" @click.stop="toggleRecognition()">{{ buttonText }}</v-btn>
    </v-layout>
    <v-layout class="display-box">
      <span style="display:none">{{ target }}</span>
      <text-list :transcript="transcript" :scripts="speech" :langs="languages" :status="'source'"></text-list>
      <text-list :scripts="transcripts" :langs="languages" :status="'target'"></text-list>
      <div class="triangle"></div>
    </v-layout>
  </v-layout>
</template>

<script>
	import {detect} from 'detect-browser'
	import Toolbar from '@/components/Toolbar.vue'
	import TextList from '@/components/TextList.vue'
	import {DB} from '@/plugins/vuefire'
	import axios from 'axios'

	export default {
		name: "admin",
		data() {
			return {
				isRecognize: false,
				buttonText: 'Start Recognition',
				languages: this.$store.state.languages,
				transcript: '',
				transcripts: {},
				speech: {},
				apiKey: 'AIzaSyCCioj-_r71RMpBewDvS6Vq6Z4bkYu82LQ',
				apiURL: 'https://translation.googleapis.com/language/translate/v2?',
				browser: ''
			}
		},
		methods: {
			async initSpeechRecognition() {
				window.SpeechRecognition =
					window.SpeechRecognition || window.webkitSpeechRecognition
				await navigator.mediaDevices.getUserMedia({
					video: false,
					audio: true
				})
				const recognition = new SpeechRecognition()
				this.$store.commit('setRecognition', recognition)
				recognition.interimResults = true
				recognition.lang = 'ko-KR'
				recognition.addEventListener('result', e => {
					const transcript = [...e.results]
						.map(result => result[0].transcript)
						.join('')
					this.transcript = transcript
					if (e.results[0].isFinal) {
						const newScript = {
							text: transcript,
							language: this.$store.state.source.code,
							created: Date.now()
						}
						DB.ref(`/events/${this.$route.hash.replace('#', '')}/speech`).push(
							newScript
						)
						this.transcript = ''
						this.languages.forEach(async language => {
							const translatedText = (await axios.get(
								`${this.apiURL}q=${newScript.text}&target=${language.code}&key=${
									this.apiKey
									}`
							)).data.data.translations[0].translatedText
							DB.ref(
								`/events/${this.$route.hash.replace('#', '')}/translated/${
									language.code
									}`
							).push({
								text: translatedText
							})
						})
					}
				})
				recognition.addEventListener('end', recognition.start)
				// recognition.start()
			},
			toggleRecognition() {
				if (this.isRecognize) {
					this.$store.state.recognition.stop()
					this.buttonText = 'Start Recognition'
				} else {
					this.$store.state.recognition.start()
					this.buttonText = 'Stop Recognition'
				}
				this.isRecognize = !this.isRecognize
			},
			isSupport() {
				return this.browser && this.browser.name === 'chrome'
			}
		},
		firebase: function () {
			return {
				speech: DB.ref(`/events/${this.$route.hash.replace('#', '')}/speech`)
			}
		},
		created: function () {
			this.browser = detect()
			if (!this.isSupport()) {
				this.$router.replace('/unsupported')
			} else {
				this.initSpeechRecognition()
			}
		},
		computed: {
			target() {
				this.$bindAsArray(
					'transcripts',
					DB.ref(`/events/${this.$route.hash.replace('#', '')}/translated/${this.$store.state.target.code}`)
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
    grid-template-rows: $HEADER_HEIGHT $HEADER_HEIGHT 1fr;
    .status {
      display: flex;
      width: 100%;
      justify-content: center;
    }
    .display-box {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
</style>