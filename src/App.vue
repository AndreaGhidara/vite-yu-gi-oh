<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import Card from './components/Card.vue'

import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
    Card,
},
  data() {
    return {
      variabile: 42,
      deckCard:[],
    }
  },
  methods: {
    callApi() {
      axios.get("https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0")
        .then(response => {
            console.log("funziona");
            this.deckCard = response.data.data
            // console.log(this.deckCard);
            console.log(response.data.data[0]);
        })
        .catch(error => {
            console.error(error);
        })
    },
  },
  mounted() {
    this.callApi()
  }
}

</script>

<template>
  <AppHeader />
  <AppMain />
  <div class="d-flex flex-wrap justify-content-center"> 

    <Card v-for="card in deckCard" :description="card.desc" :image="card.card_images[0].image_url" :title="card.name"/>

  </div>
</template>

<style scoped></style>
