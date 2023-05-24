<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';

import { store } from './data/store';

export default {
  components: {
    AppHeader,
    AppMain
},
  data() {
    return {
      variabile: 42,
      store,
    }
  },
  methods: {
    
  },
  mounted() {
    store.callApi()
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
</template>

<style scoped>
</style>
