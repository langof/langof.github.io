import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      target: {
        icon: '🇺🇸',
        text: 'English',
				code: 'en',
				talk: 'en-US'
      },
      source: {
        icon: '🇰🇷',
        text: 'Korean',
				code: 'ko',
				talk: 'ko-KR'
      },
      isFinal: false,
      transcripts: [],
			recognition: {},
      sourceLanguages: [{
          "language": "en-US",
          "name": "English - United States"
        },
        {
          "language": "en-GB",
          "name": "English - United Kingdom"
        },
        {
          "language": "fr-FR",
          "name": "Francais"
        },
        {
          "language": "ko-KR",
          "name": "한국어"
        },
        {
          "language": "ja-JP",
          "name": "日本語"
        },
      ],
    },
    getters: {
      getRecognition: state => {
        return state.recognition
      }
    },
    mutations: {
			setLanguage: (state, { status, lang }) => {
				state[status] = lang
				return state[status]
      },
      setSource(state, source) {
        state.source = source
      },
      setTarget(state, target) {
        state.target = target
      },
      addScript(state, script) {
        state.scripts.push(script)
        return state.scripts
      },
      setIsFinal(state, isFinal) {
        state.isFinal = isFinal
        return state.isFinal
      },
      addTranscript(state, transcript) {
        state.transcripts.push(transcript)
        return state.transcripts
      },
      clearTranscript: state => {
        state.transcripts = []
        return state.transcripts
      },
      setRecognition(state, recognition) {
        state.recognition = recognition
        return state.recognition
      },
      setRecognitionLang(state, language) {
        state.recognition.lang = language
        return state.recognition
      }
    }
  })
}

export default store
