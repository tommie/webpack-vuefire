import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import MockFirebase from 'firebase-mock'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Hello from '@/components/Hello'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

describe('Hello.vue', () => {
  var ref{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  beforeEach(() => {
    ref = new MockFirebase.MockFirebase('', {
      greetings: [{lang: 'en', text: 'Welcome to Your Vue.js App'}]{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

  it('should render correct contents', (done) => {
    const vm = new Vue(Object.assign({fbref: ref}, Hello)){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    vm.$mount(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    ref.flush(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    Vue.nextTick(() => {
      expect(vm.$el.querySelector('.hello h1').textContent)
        .to.equal('Welcome to Your Vue.js App'){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      done(){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
    }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
