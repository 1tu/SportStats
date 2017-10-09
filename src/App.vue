<template lang="pug">
  v-app#inspire
    ss-header

    main
      v-content
        v-container(fluid fill-height)
          v-layout(justify-center align-center)
            h1 1

    v-btn(fab bottom right color='pink' dark fixed)
      v-icon add
</template>

<script>
import SsHeader from './component/SsHeader.vue'
export default {
  components: { SsHeader },
  data: () => ({
  }),
  props: {
    source: String
  }
}
</script>

<style lang="stylus">
  @import './stylus/main'
</style>
