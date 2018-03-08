<template>
  <div>
    <v-btn class="lang--btn" flat @click.stop="dialog = true" color="primary" dark slot="activator">
      <v-icon medium>
        {{ getCurrentLanguage.icon }}
      </v-icon>
      <span>
        {{ getCurrentLanguage.text }}
      </span>
    </v-btn>
    <v-dialog v-model="dialog" scrollable width="200">
      <v-card>
        <v-card-title>
          <v-icon>
            language
          </v-icon>
          &nbsp; Select Language
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-btn v-for="lang in langs" :key="lang.text" flat @click="changeLanguage(lang)">
            <v-icon>
              {{ lang.icon }}
            </v-icon>
            <span>
              {{ lang.text }}
            </span>
          </v-btn>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialog: false
    }
  },
  props: ['langs', 'status'],
  computed: {
    getCurrentLanguage() {
      // console.log(this.$store.state[this.status])
      return this.$store.state[this.status]
    }
  },
  methods: {
    changeLanguage: function(lang) {
      this.dialog = false
      this.$store.commit('setLanguage', { status: this.status, lang })
      this.status === 'source' &&
        this.$store.commit('setRecognitionLang', lang.talk)
    }
  }
}
</script>

<style lang="scss">
.card {
  div.btn__content {
    justify-content: start;
  }
}
</style>

<style lang="scss" scoped>
@import '../assets/css/_variables.scss';

.lang--btn {
  background: $Comment !important;
  margin: 0;
  width: 100%;
  border-radius: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  .icon {
    padding-bottom: 2px;
  }
  span {
    font-size: 1.2rem;
    margin-left: 10px;
  }
}
.card {
  background: $Background;
  hr {
    background: grey;
  }
  .card__text {
    display: grid;
    padding: 0;
    height: 180px;
    .btn {
      display: grid;
      height: 45px;
      padding: 0;
      margin: 0;
      text-transform: none;
      .btn__content {
        background: $Foreground;
        span {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
