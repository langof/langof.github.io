<template>
  <v-layout class="body" elevation-0>
    <!--<img class="logo" src="/logo.png">-->
    <input type="text" v-model="eventCode" @keyup.enter="keyupEnter()" placeholder="Event Code">
    <div class="buttons">
      <v-btn class="join" @click.native.stop="joinEvent" round :disabled="!joinValidate" flat>
        JOIN
      </v-btn>
      <v-btn class="make" @click.native.stop="createEvent" round :disabled="!makeValidate" flat>
        CREATE
      </v-btn>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-card-title class="headline">브라우저 미지원</v-card-title>
          <v-card-text>WEB Speech API는</v-card-text>
          <v-card-text>크롬 브라우저만 지원합니다.</v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="green darken-1" flat @click.native="dialog = false">확인</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-layout>
</template>

<script>
	import {DB} from '../plugins/vuefire'
	import {detect} from 'detect-browser'
	import _ from 'lodash'

	export default {
		name: "EventJoin",
		data() {
			return {
				eventCode: '',
				dialog: false,
				browser: ''
			}
		},
		firebase: {
			events: DB.ref('/eventInfo')
		},
		created: function () {
			this.browser = detect()
		},
		methods: {
			createEvent: function () {
				if (!this.isSupport()) {
					return this.dialog = true
				}
				DB.ref('/eventInfo').push({code: this.eventCode})
				this.$router.push(`admin/#${this.eventCode}`)
			},
			joinEvent() {
				this.$router.push(`event/#${this.eventCode}`)
			},
			isSupport: function () {
				return this.browser && this.browser.name === 'chrome'
			},
			keyupEnter() {
				this.joinValidate && this.joinEvent()
				this.makeValidate && this.createEvent()
			}
		},
		computed: {
			joinValidate: function () {
				return this.eventCode && _.findIndex(this.events, e => e.code === this.eventCode) !== -1
			},
			makeValidate: function () {
				return this.eventCode && _.findIndex(this.events, e => e.code === this.eventCode) === -1
			}
		}
	}
</script>

<style lang="scss" scoped>
  @import '../assets/css/variables';

  .body {
    padding: 30px;
    border-radius: 12px;
    color: $Foreground;
    background: none;
    max-width: 280px;
    display: grid;
    flex: none;
    overflow: hidden;
    justify-items: center;
    .logo {
      height: 60px;
      margin-bottom: 20px;
    }
    input {
      font-size: 1.5rem;
      border: 1px solid $Foreground;
      padding: 5px;
      text-align: center;
      width: 192px;
      border-radius: 200px;
      outline: none;
      &::placeholder {
        color: lightgrey;
      }
    }
    .buttons {
      margin-top: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      .join {
        background: #64c37d !important;
        font-size: 1.2rem;
        &.btn--disabled {
          background: grey !important;
        }
      }
      .make {
        background: #64c37d !important;
        font-size: 1.2rem;
        &.btn--disabled {
          background: grey !important;
        }
      }
    }
  }

  .dialog {
    .card {
      background: $Foreground;
      color: black;
    }
  }
</style>