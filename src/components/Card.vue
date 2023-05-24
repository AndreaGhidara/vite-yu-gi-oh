<script>

export default {
  name: "Card",
  props: {
    image: String,
    title: String,
    description: String,
  },
}


</script>

<template>
  <div class="customCard d-flex">
    <div class="left w-50">
      <img class="img-fluid" :src="image" alt="">
    </div>
    <div class="right w-50 text-center">
      <h4 class="fw-bold">{{ title }}</h4>
      <p class="card-text">description: {{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.customCard {
  background-color: royalblue;
  border-radius: 10px;
  padding: 10px;
  margin: 1rem;
  width: 25rem;
  max-height: 19rem;

  img {
    border-radius: 10px 0 0 0;
    &:hover{
      transform: translateY(-20px);

    }
  }
  
  .left {
  border-radius: 10px 0 0 10px;
  }
  
  .right {
  border-radius: 0px 10px 10px 0px;
  max-height: 19rem;
  overflow: hidden;
  }

}

</style>
