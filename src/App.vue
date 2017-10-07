<template lang="pug">
  v-app
    v-toolbar
      v-toolbar-title {{ $t('message.hello') }}
      v-spacer
      v-btn(lg @click='switchLang()') {{ $t('message.switchLang') }}
      v-toolbar-side-icon.hidden-md-and-up
      v-toolbar-items.hidden-sm-and-down
        v-btn(flat v-for='route in routes' :key='route.path'
          @click='$route.path !== route.path && routeTo(route.path)'
          :class='[$route.path === route.path ? "blue-grey lighten-2" : ""]'
        ) {{ route.title }}

    main
      v-content
        v-container(fluid)
          v-layout
            router-view

    v-footer
      span &copy; 2018

</template>

<script>
import { routes } from './router'
export default {
  data() {
    return {
      routes
    }
  },
  methods: {
    routeTo(path) {
      this.$router.push(path);
      console.log(this.$route)
    },
    switchLang() {
      this.$i18n.locale = 'en';
      this.$router.push(this.$route.fullPath);
    }
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
