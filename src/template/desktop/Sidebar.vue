<template>
  <b-row >
    <div class="sidebar img_body_menu">
      <div class="shadow" >
        <ul>
          <span :style="linksStyle">
          <li :style="textLinks">INICIO</li>
          <li :style="textLinks" :class="coachLink"
          @mouseover="showSubMenuBoost" @mouseleave="hideSubMenuBoost" >
            BOOST/COACH
          </li>
          <ul :style="showMenu"  :class="subBoost">
              <li :style="textLinks">AULAS</li>
              <li :style="textLinks">BOOST</li>
              <li :style="textLinks">RANQUED BOOST</li>
          </ul>
          </span>
        </ul>
      </div>
    </div>
  </b-row>
</template>

<script>
import Menu from './menu/Index.vue';

export default {
  components: {
    Menu,
  },
};
</script>
<style lang='scss'>
.shadow {
  background-color: rgba(51, 94, 87, 0.5);
  width:100%;
  position:absolute;
  left:0;
  height:100%;
}
.img_body_menu {
  height: 1000px;
  opacity: 1;
  background: url("~@/assets/img_background_menu.png") no-repeat;
  background-size: 100% 100%;
}
.sidebar {
  background-color: rgb(7, 10, 10);
  min-height: 1000px;
  position: fixed;
  border-right: solid 12px rgba(51, 94, 87, 1);
  width: 16.68%;
  box-shadow: 10px 0px 10px #0c2320;
}
</style>
