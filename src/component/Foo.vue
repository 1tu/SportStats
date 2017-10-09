<template lang="pug">
  div
    p foooo {{ test }}
    v-btn(@click='zz("sssss")') lala

    v-data-table(
      v-bind:headers="headers"
      :items="items"
      hide-actions
      class="elevation-1"
    )
      template(slot="items" scope="props")
        td.text-xs-right {{ props.item.id }}
        td.text-xs-right {{ props.item.role_id }}
        td.text-xs-right {{ props.item.profile_id }}
        td.text-xs-right {{ props.item.username }}
        td.text-xs-right {{ props.item.email }}
        td.text-xs-right {{ props.item.enroll_expires_at }}
        td.text-xs-right {{ props.item.created_at }}
        td.text-xs-right {{ props.item.updated_at }}
        td.text-xs-right {{ props.item.organization_id }}

</template>

<script>
import axios from 'axios'
import _ from 'lodash'
export default {
  data() {
    return {
      test: 'testtttfsafa sss',
      headers: [],
      items: []
    }
  },
  methods: {
    zz(z) {
      this.test = '!!!!'
      axios.get('/user').then(res => {
        console.log(res.data);
        this.headers = _.keys(res.data[0]).filter(item => item !== 'password').map(item => ({ text: item, value: item }));
        this.items = res.data;
      })
    }
  }
}
</script>
