<template>
  <div style="width:90%; margin:03% 0% 0% 06%; height:200px; background-color: #c2c2c2c;">
    <b-carousel
      v-model="slide"
      id="carousel-no-animation"
      style="text-shadow: 0px 0px 2px #000"
      no-animation
      indicators
      controls
      background="#ababab"
      img-width="800"
      img-height="400"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide caption="First slide">
        <template v-slot:img>
          <img src="@/assets/p.png" class="img-carousel" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide caption="Second Slide">
        <template v-slot:img>
          <img src="@/assets/bg_carrousel_02.png" class="img-carousel" />
        </template>
      </b-carousel-slide>
      <b-carousel-slide caption="Third Slide">
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
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>
<style lang="scss">
.img-carousel {
  height: 370px;
}
.carousel-indicators .active {
  background-color: #15ff00;
}
.carousel-indicators li {
  background-color: #16ff0170;
}
</style>
