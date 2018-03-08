<template>
  <v-layout class="body" elevation-24>
    <img class="logo" src="/logo.png">
    <v-form>
      <input type="text" v-model="eventCode" placeholder="Event Code">
      <div class="buttons">
        <v-btn class="join" round :disabled="joinValidate" flat>JOIN</v-btn>
        <v-btn class="make" @click="createEvent" round :disabled="makeValidate" flat>
          CREATE
        </v-btn>
      </div>
    </v-form>
  </v-layout>
</template>

<script>
import { DB } from '../plugins/vuefire'
import _ from 'lodash'

export default {
  data() {
    return {
      eventCode: ''
    }
  },
  firebase: {
    events: DB.ref('/eventInfo')
  },
  methods: {
    createEvent: function() {
      DB.ref('/eventInfo').push({ code: this.eventCode })
      this.$router.push(`admin/#${this.eventCode}`)
    }
  },
  computed: {
    joinValidate: function() {
      return (
        !this.eventCode ||
        _.findIndex(this.events, e => e.code === this.eventCode) === -1
      )
    },
    makeValidate: function() {
      return (
        !this.eventCode ||
        _.findIndex(this.events, e => e.code === this.eventCode) !== -1
      )
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

.body {
  padding: 30px;
  border-radius: 12px;
  color: $Foreground;
  background: $Background;
  max-width: 280px;
  display: grid;
  overflow: hidden;
  justify-items: center;
  .logo {
    height: 60px;
    margin-bottom: 20px;
  }
  form {
    display: grid;
    justify-items: center;
  }
  input {
    font-size: 1.5rem;
    border: 1px solid $Foreground;
    padding: 5px;
    text-align: center;
    width: 192px;
    border-radius: 200px;
    outline: none;
  }
  .buttons {
    margin-top: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    .join {
      background: $Purple !important;
      font-size: 1.2rem;
      &.btn--disabled {
        background: grey !important;
      }
    }
    .make {
      background: $Purple !important;
      font-size: 1.2rem;
      &.btn--disabled {
        background: grey !important;
      }
    }
  }
}
</style>