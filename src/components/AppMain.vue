<script>
import Card from './Card.vue';
import { store } from '../data/store';


export default {
  name: "AppMain",
  components: {
    Card,
  },
  data() {
    return {
      variabile: 42,
      store,
    }
  },
}

</script>

<template>
  <div>
    <div>
      <select @change="store.callApi()" v-model="store.valoreOptions" name="" id="">
        <option v-for="test in store.typeCard" :value="test">
          {{ test }}
        </option>
      </select>
    </div>

    <h2>Carte trovate : {{ store.resultsCardNumber }}</h2>
    <div class="d-flex flex-wrap justify-content-center">

      <Card v-for="card in store.deckCard" :description="card.desc" :image="card.card_images[0].image_url"
        :title="card.name" />

    </div>
  </div>
</template>

<style lang="scss" scoped>
div {
  background-color: royalblue;

}
</style>
