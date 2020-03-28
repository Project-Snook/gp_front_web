<template>
  <div class="carousel-div">
    <b-carousel
      v-model="slide"
      id="carousel-no-animation"
      no-animation
      indicators
      controls
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template v-slot:img>
          <div class="border-top"></div>
          <div class="border-bottom"></div>
          <img src="@/assets/p.png" class="img-carousel" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <div class="border-top"></div>
          <div class="border-bottom"></div>
          <img src="@/assets/bg_carrousel_02.png" class="img-carousel" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <div class="border-top"></div>
          <div class="border-bottom"></div>
          <img src="@/assets/bg_carrousel_03.png" class="img-carousel" />
        </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  methods: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSlideStart(slide) {
      this.sliding = true;
    },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style lang="scss">
.carousel-div {
  width: 90%;
  margin: 03% 0% 0% 06%;
  height: 370px;
  background: none;
}
.img-carousel {
  box-shadow: 0px 5px 35px 5px #151c12;
  width: 100%;
  height: 370px;
}
.border-top {
    height: 10px;
    width: 100%;
    position: absolute;
    background-color: #10140d;
    opacity: 0.8;
}
.border-bottom {
  height: 40px;
  width: 100%;
  position: absolute;
  background-color: #10140d;
  opacity: 0.8;
  margin-top: 330px;
}
.carousel-indicators .active {
  background-color: #15ff00;
  margin-bottom: -7px;
}
.carousel-indicators li {
  background-color: #061b0470;
  margin-bottom: -7px;
}
</style>
