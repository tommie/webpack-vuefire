import VueFire from 'vuefire'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

export default {
  install (Vue, options) {
    Vue.use(VueFire){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    Object.defineProperty(Vue.prototype, '$fbref', {
      get: function () {
        if (!this.$options.fbref) {
          return this.$parent.$fbref{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        }
        return typeof this.$options.fbref === 'function' ? this.$options.fbref.call(this) : this.$options.fbref{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
