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
          <img src="@/assets/p.png" class="img-carousel" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
          <img src="@/assets/bg_carrousel_02.png" class="img-carousel" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide>
        <template v-slot:img>
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
.carousel-indicators .active {
  background-color: #5AFF01;
  margin-bottom: -7px;
}
.carousel-indicators li{
  margin-bottom: -7px;
}
</style>
