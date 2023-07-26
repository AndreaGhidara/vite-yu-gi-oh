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
  <!-- <div class="customCard d-flex">
    <div class="left w-50">
      <img class="img-fluid" :src="image" alt="">
    </div>
    <div class="right d-flex flex-column align-items-center justify-content-around w-50 text-center">
      <h4 class="fw-bold">{{ title }}</h4>
      <div class="cardContent">
        <p class="card-text">{{ description }}</p>
      </div>
      <button class="btn btn-success border w-75">More</button>
    </div>
  </div> -->

  <!-- <div class="box">
  <a href="#"></a>
  <a href="#"></a>
  <a href="#"></a>
  <a href="#"></a>
  <div class="card">
    <div class="card-header">
      <span class="fw-bold">{{ title }}</span>
    </div>
    <img class="img-fluid" :src="image" alt="">
  </div>
</div> -->

<div class="card">
  <img class="img-fluid" :src="image" alt="">
  <div class="titleContainer">
    <span class="fw-bold">{{ title }}</span>
  </div>
</div>

  <!-- <div class="cartadescrizione">
    <div class="conteiner-fluid d-flex">
        <img class="img-fluid" src="https://images.ygoprodeck.com/images/cards/34541863.jpg" alt="" srcset="">
      <div class="">
        <div class="bg-warning w-100">
          <p>nome</p>
        </div>
        <p>Archetype:</p>
        <p>description:</p>
        <p>race:</p>
        <p>Type:</p>
      </div>
    </div>
    
  </div> -->

</template>

<style lang="scss" scoped>
.card {
  position: relative;
  background: #28282B;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 6px solid #F5F5DC;
  border-radius: 5px;
  transition: 0.5s;
  overflow: hidden;

  .titleContainer{
    height: 4rem;
    max-height: 4rem;
  }
}

.card .circle {
  width: 8em;
  height: 14em;
  border-radius: 50%;
  transform: skew(-25deg);
  border: 4px solid white;
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.card .circle.small {
  position: absolute;
  width: 1.5em;
  height: 3em;
  border: 1px solid white;
}

.card .circle.top-left {
  top: 0.3em;
  left: 0.6em;
}

.card .circle.bottom-right {
  bottom: 0.3em;
  right: 0.6em;
}

.card:hover {
  cursor: pointer;
  transform: translate(0, -5px);
}

.card:hover:after, .card:hover:before {
  visibility: hidden;
}

.card .circle span:nth-child(1) {
  background-color: #FF2400;
  border-top-left-radius: 100%;
}

.card .circle span:nth-child(2) {
  background-color: #1F51FF;
  border-top-right-radius: 100%;
}

.card .circle span:nth-child(3) {
  background-color: #FFEA00;
  border-bottom-left-radius: 100%;
}

.card .circle span:nth-child(4) {
  background-color: #50C878;
  border-bottom-right-radius: 100%;
}

/* glider animation */
.card:before {
  content: '';
  position: absolute;
  height: 130%;
  width: 1em;
  background-color: aliceblue;
  opacity: 0.14;
  animation: glider 1.8s infinite linear;
  animation-delay: 0.05s;
}

.card:after {
  content: '';
  position: absolute;
  height: 120%;
  width: 0.8em;
  background-color: aliceblue;
  opacity: 0.1;
  animation: glider 1.8s infinite linear;
}

@keyframes glider {
  0% {
    transform: rotate(45deg) translate(-12em, 1.2em);
  }

  100% {
    transform: rotate(45deg) translate(18em, -2.8em);
  }
}
// .box .card {
//   background-color: white;
//   border-radius: 10px;
//   border: 1px solid black;
//   position: relative;
//   z-index: 0;
//   transition: all 300ms ease-out;
//   transform-origin: center center;
//   width: 100%;
//   height: 100%;
//   box-shadow: 0px;
// }

// .card-header {
//   height: 5rem;
//   padding: 10px;
//   background-color: #000;
//   color: white;
//   font-size: 16px;
//   border: 1px solid white;
//   border-top-left-radius: 10px;
//   border-top-right-radius: 10px;
// }

// .box .card .border {
//   transition: all 300ms ease-out;
//   transform-origin: center center;
//   position: absolute;
//   top: 6px;
//   left: 6px;
//   width: calc(100% - 12px);
//   height: calc(100% - 12px);
//   border: 1px solid black;
//   border-radius: 9px;
// }

// .box {
//   perspective: 1000px;
//   position: relative;
//   /* you don't need width and height if your card already has a lot of content */
//   width: 100%;
//   max-width: 250px;
//   border-radius: 10px;
// }
// .box a {
//   opacity: 0;
//   position: absolute;
//   z-index: 1;
//   width: 50%;
//   height: 50%;
// }
// .box a:hover,
// .box a:focus {
//   transform: translateZ(50px);
// }

// .box a:hover ~ .card .card-header,
// .box a:focus ~ .card .card-header {
//   transform: translateZ(24px);
// }

// .box a:nth-child(1) {
//   top: 0;
//   left: 0;
// }
// .box a:nth-child(1):hover ~ .card,
// .box a:nth-child(1):focus ~ .card {
//   transform: rotateX(10deg) rotateY(-10deg) translateZ(0);
//   transform-origin: right bottom;
//   box-shadow: 10px 20px;
// }
// .box a:nth-child(2) {
//   top: 0;
//   right: 0;
// }
// .box a:nth-child(2):hover ~ .card,
// .box a:nth-child(2):focus ~ .card {
//   transform: rotateX(10deg) rotateY(10deg) translateZ(0);
//   transform-origin: left bottom;
//   box-shadow: -10px 20px;
// }
// .box a:nth-child(3) {
//   bottom: 0;
//   right: 0;
// }
// .box a:nth-child(3):hover ~ .card ,
// .box a:nth-child(3):focus ~ .card {
//   transform-origin: left top;
//   transform: rotateX(-10deg) rotateY(10deg) translateZ(0);
//   box-shadow: -10px -20px;
// }
// .box a:nth-child(4) {
//   bottom: 0;
//   left: 0;
// }
// .box a:nth-child(4):hover ~ .card,
// .box a:nth-child(4):focus ~ .card {
//   transform-origin: right top;
//   transform: rotateX(-10deg) rotateY(-10deg) translateZ(0);
//   box-shadow: 10px -20px;
// }

// .customCard {
//   background-color: royalblue;
//   border-radius: 10px;
//   padding: 10px;
//   margin: 1rem;
//   width: 25rem;
//   max-height: 19rem;

//   img {
//     border-radius: 10px 0 0 0;

//     &:hover {
//       transform: translateY(-20px);

//     }
//   }
//   .cardContent {
//     height: 50%;
//     overflow: hidden;
//   }

//   .left {
//     border-radius: 10px 0 0 10px;
//   }
    
//   .right {
//     border-radius: 0px 10px 10px 0px;
//     max-height: 19rem;
//     overflow: hidden;
//   }

// }
// .cartadescrizione {
//   display: flex;
//   margin: 0;
//   padding: 0;
//   width: 100vw;
//   height: 100vh;
//   background-color: red;
// }
</style>
