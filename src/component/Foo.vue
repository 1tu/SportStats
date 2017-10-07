<template lang="pug">
  div
    p foooo {{ test }}
    v-btn(@click='zz("sssss")') lala
</template>

<script>
export default {
  data() {
    return {
      test: 'testtttfsafa sss'
    }
  },
  methods: {
    zz(z) {
      this.test = '!!!!'
      console.log(this.test + z)
    }
  }
}
</script>
