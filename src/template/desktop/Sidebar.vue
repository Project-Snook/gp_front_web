<template>
  <b-row >
    <div class="sidebar img_body_menu">
      <div class="shadow" >
        <ul class="menu">
          <span @mouseover="showMenuCoach" @mouseleave="hideMenuCoach">
          <li class="linksMenu">INICIO</li>
          <li :class="`linksMenu ${linkCoach}`" >
            COACH/BOOST
          </li>
          <ul  :class="`menuCoach  ${coachLink}`">
              <li class="linksCoach">AULAS</li>
              <li class="linksCoach">BOOST</li>
              <li class="linksCoach">RANQUED BOOST</li>
          </ul>
          <li class="linksMenu">ASSINANTES</li>
          <li class="linksMenu">HERÓIS</li>
          <li class="linksMenu">GRATUITO</li>
          <li class="linksMenu">SOBRE</li>
          </span>
        </ul>
      </div>
    </div>
  </b-row>
</template>

<script>

export default {
  components: {
  },
  data() {
    return {
      coachLink: 'hideMenuCoach',
      linkCoach: '',
    };
  },
  methods: {
    showMenuCoach() {
      this.coachLink = 'showMenuCoach';
      this.linkCoach = 'linkCoach';
    },
    hideMenuCoach() {
      this.coachLink = 'hideMenuCoach';
      this.linkCoach = '';
    },
  },
};
</script>
<style lang='scss'>
@font-face {
  font-family: "FONT_EMUSE";
  src: url("~@/assets/fonts/E-Muse-Bold.otf");
}
@font-face {
  font-family: "FONT_REGULAR";
  src: url("~@/assets/fonts/JosefinSans-Regular.ttf");
}
@font-face {
  font-family: "FONT_THIN";
  src: url("~@/assets/fonts/JosefinSans-Thin.ttf");
}
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
.linksMenu {
  color: #e7e7e7;
  text-align:left;
  padding-bottom:5%;
  font-family: 'FONT_REGULAR';
  padding-left:50px;
}
.linksCoach {
  list-style: none;
  text-align:left;
  padding-left:15%;
  color: #e7e7e7;
  font-family: 'FONT_REGULAR';
}
.linkCoach {
  padding-top:3%;
  background-color:#274a46;
  width:100%;
  border-bottom:#132422 2px solid;
}
.menu {
 list-style-type: none;
 position:absolute;
 width:280px;
 left:-17%;
 text-align:left;
 top:2%;
 }
 .menuCoach {
  list-style-type: none;
  background-color:#1d3633;
  width:100%;
  padding: 2px 0px 5px 15%;
 }
 .showMenuCoach {
   display:block;
 }
 .hideMenuCoach {
   display:none;
 }


</style>
