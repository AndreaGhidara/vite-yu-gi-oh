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
      <!--==================
            SelectZone
      ====================-->
      <div class="container">
        <div class="row py-3">
          <div class="col d-flex">
            <select v-model="store.valoreOptions" class="form-select m-1 text-white bg-success" aria-label="Default select example">
              <option v-for="test in store.typeCard" :value="test" selected>{{ test }}</option>
            </select>
          </div>
          <div class="col d-flex justify-content-end">
            <button @click="store.callApi()" class="btn btn-primary w-50">ClickMe</button>
          </div>
        </div>
      </div>
    </div>

    <!--==================
            Carte Trovate
    ====================-->
    <div class="container">
      <h2>Carte trovate : {{ store.resultsCardNumber }}</h2>
    </div>

    <!--==================
            CARD
    ====================-->
    <div class="container">
      <div class="row row-cols-3 d-flex justify-content-between flex-wrap">
        <Card v-for="card in store.deckCard" :description="card.desc" :image="card.card_images[0].image_url"
          :title="card.name" />
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>
