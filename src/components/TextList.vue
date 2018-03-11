<template>
  <v-layout class="outter-box">
    <v-layout class="inner-box">
      <lang-dialog :langs="langs" :status="status"></lang-dialog>
      <v-layout class="scripts" @scroll="scriptScroll">
        <v-layout class="script">
          <span v-show="transcript">{{ transcript }}</span>
          <span v-for="(script, i) in reversedScript" :key="script['.key']">
            <span :class="{ 'mini-script': transcripts }"> {{ getScript(script) }} </span>
            {{ getScript(reversedTranscript[i]) }}
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
      border-radius: 10px;
      align-content: start;
      .scripts {
        position: relative;
        height: 100%;
        overflow: auto;
        scroll: i;
        .script {
          position: absolute;
          padding: 8px;
          display: grid;
          align-content: start;
          grid-gap: 8px;
          font-size: 1.5rem;
          .mini-script {
            display: block;
            font-size: 0.8rem;
          }
        }
      }
    }
  }
</style>
