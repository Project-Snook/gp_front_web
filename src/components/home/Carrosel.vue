<template>
  <div style="width:90%; margin:03% 0% 0% 06%; height:200px">
    <b-carousel
        id="carousel-no-animation"
        style="text-shadow: 0px 0px 2px #000"
        no-animation
        indicators
        img-width="800"
        img-height="400"
    >
        <b-carousel-slide
        caption="First slide"
        >
        <template v-slot:img>
            <img src="@/assets/bg_carrousel_01.png" height="370"  alt="">
        </template>
        </b-carousel-slide>
        <b-carousel-slide
        caption="Second Slide"
        >
        <template v-slot:img>
            <img src="@/assets/bg_carrousel_02.png" height="370" alt="">
        </template>
        </b-carousel-slide>
        <b-carousel-slide
        caption="Third Slide"
        >
        <template v-slot:img>
            <img src="@/assets/bg_carrousel_03.png" height="370" alt="">
        </template>
        </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
export default {
};
</script>
<style lang="scss">
.carousel-indicators .active{
    background-color:#15ff00
}
.carousel-indicators li{
    background-color:#16ff0170
}
</style>
