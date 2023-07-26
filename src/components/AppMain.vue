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
      <div class="container-fluid px-5">
        <div class="row">
          <div class="col d-flex align-items-center">
            <label for="tipology" class="fs-5">Seleziona una tipologia</label>
            <select id="tipology" name="tipology" v-model="store.valoreOptions" class="form-select m-1 w-25">
              <template v-for="typeCard in store.typeCard" :key="typeCard">
                <option :value="typeCard">{{ typeCard }}</option>
              </template>
            </select>
          </div>
          <div class="col d-flex justify-content-end">
            <button @click="store.callApi()" class="btn btn-primary w-25">Serch</button>
          </div>
        </div>
      </div>
    </div>

    <!--==================
            Carte Trovate
    ====================-->
    <div class="container-fluid px-5">
      <h2>Carte trovate : {{ store.resultsCardNumber }}</h2>
    </div>

    <!--==================
            CARD
    ====================-->
    <div class="container-fluid p-5">
      <div class="row row-cols-6 g-5 d-flex flex-wrap">
        <template v-for="card in store.deckCard" :key="card">
          <div class="col">
            <Card :description="card.desc" :image="card.card_images[0].image_url"
              :title="card.name" />
          </div>
        </template>
        </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>

</style>
