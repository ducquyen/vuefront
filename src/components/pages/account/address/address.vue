<template>
  <section>
    <vf-t-account-address :items="items"/>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
import AddressesGql from './address.graphql'
export default {
  computed: {
    ...mapGetters({
      items: "common/address/list"
    })
  },
  async fetch({ store }) {
    await store.dispatch(
      'apollo/query',
      {
        query: AddressesGql
      }
    )
    if (!store.getters['vuefront/error']) {
      store.commit('common/address/setEntities', store.getters['apollo/get'].accountAddressList)
    }
  }
};
</script>