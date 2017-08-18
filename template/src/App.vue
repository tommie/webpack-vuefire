<template>
  <div id="app">
    <img src="./assets/logo.png">
    <form id="form" v-on:submit.prevent="addGreeting">
      <input type="text" v-model="newGreeting.lang" placeholder="Language Name">
      <input type="text" v-model="newGreeting.text" placeholder="How do you say hello?">
      <input type="submit" value="Add Greeting">
    </form>

    {{#router}}
    <router-view></router-view>
    {{else}}
    <hello></hello>
    {{/router}}
  </div>
</template>

<script>
  import Firebase from 'firebase'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}{{#unless router}}
  import Hello from './components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/unless}}

  // A Firebase app must have unique names, and hot reloading would break that.
  // Re-use an existing app after hot reload if possible.
  var app{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  if (process.env.NODE_ENV === 'development' && module.hot) {
    if (module.hot.data) {
      app = module.hot.data.app{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }
    module.hot.addDisposeHandler(function (data) {
      data.app = app{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  if (!app) {
    // Using https may cause Firebase to resort to HTTPS if the WebSocket
    // connection fails once. firebase-server doesn't support long polling, so
    // force WebSockets in development mode.
    let scheme = process.env.NODE_ENV === 'production' ? 'https' : 'wss'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    app = Firebase.initializeApp({databaseURL: scheme + '://{{ name }}.firebaseio.com'}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }
  var db = app.database(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  export default {
    name: 'app',

    fbref: db.ref(),

    firebase () {
      return {
        greetings: this.$fbref.child('greetings'){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },

    data () {
      return {
        newGreeting: {
          lang: '',
          text: ''{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
        }
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    },

    methods: {
      addGreeting () {
        this.$firebaseRefs.greetings.push(this.newGreeting){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        this.newGreeting.lang = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
        this.newGreeting.text = ''{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }{{#router}}{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{else}},
    components: {
      Hello{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}{{/router}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
