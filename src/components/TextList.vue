<template>
  <v-layout class="outter-box">
    <v-layout class="inner-box">
      <lang-dialog :langs="langs" :status="status"></lang-dialog>
      <v-layout class="scripts" @scroll="scriptScroll">
        <v-layout class="script">
          <span v-show="transcript">{{ transcript }}</span>
          <span class="box" v-for="(script, i) in reversedScript" :key="script['.key']">
            <span :class="{ 'mini-script': transcripts, 'wrap': !transcripts }" contenteditable
                  @keydown.enter.prevent="keyupEnter"> {{ getScript(script) }} </span>
            <span class="wrap" v-if="transcripts">{{ getScript(reversedTranscript[i]) }}</span>
          </span>
        </v-layout>
      </v-layout>
    </v-layout>
  </v-layout>
</template>

<script>
	import LangDialog from '../components/LangDialog.vue'

	export default {
		props: ['langs', 'scripts', 'transcripts', 'status', 'transcript'],
		methods: {
			getScript(script) {
				return script && script.text && script.text.replace('&#39;', "'")
			},
			scriptScroll(e) {
				if (!this.transcripts) {
					document.querySelectorAll('.scripts')[0].scrollTop = e.target.scrollTop
					document.querySelectorAll('.scripts')[1].scrollTop = e.target.scrollTop
				}
			},
			keyupEnter(e) {
				e.target.innerHTML = e.target.innerHTML.replace('&nbsp;', '')
				e.target.blur()
				console.log(e.target.innerHTML)
			}
		},
		computed: {
			reversedScript() {
				return this.scripts && this.scripts.slice().reverse()
			},
			reversedTranscript() {
				return this.transcripts && this.transcripts.slice().reverse()
			}
		},
		components: {
			LangDialog
		},
	}
</script>

<style lang="scss" scoped>
  @import '../assets/css/_variables.scss';

  .outter-box {
    width: 100%;
    padding: 20px;
    padding-top: 0;
    .inner-box {
      position: relative;
      display: flex;
      flex-direction: column;
      background: $Selection;
      border-radius: 4px;
      align-content: start;
      .scripts {
        position: relative;
        height: 100%;
        overflow: auto;
        -webkit-overflow-scrolling: touch;
        .script {
          position: absolute;
          padding: 8px;
          display: grid;
          grid-auto-flow: row;
          align-content: start;
          grid-gap: 8px;
          font-size: 1.5rem;
          .mini-script {
            display: block;
            font-size: 0.8rem;
            color: $Foreground;
            padding: 2px;
          }
          .box {
            color: $Background;
            overflow-x: hidden;
            .wrap {
              display: inline-block;
              max-width: 100%;
              background: $Foreground;
              border-radius: 8px;
              padding: 6px;
            }
          }
        }
      }
    }
  }
</style>
