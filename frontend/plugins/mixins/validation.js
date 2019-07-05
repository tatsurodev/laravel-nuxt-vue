import Vue from 'vue'
import {
  mapGetters
} from 'vuex'

const Validation = {
  install(Vue, options) {
    Vue.mixin({
      computed: {
        ...mapGetters({
          // errors gettersにstore/validation.jsのerrors gettersをマップする
          errors: "validation/errors",
        })
      }
    })
  }
}

Vue.use(Validation)
