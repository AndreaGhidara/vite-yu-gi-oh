<script>

export default {
  name:"Card",
  props: {
        image: String,
        title: String,
        description:String,
    },
}


</script>

<template>
  <div class="card m-2" style="width: 15rem;">
    <img :src="image" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">Titolo: {{title}}</h5>
      <p class="card-text">description: {{description}}</p>
      <!-- <a href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>


</style>
