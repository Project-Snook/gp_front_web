<template>
  <b-container fluid>
    <b-row class="routerView">
      <div  style="position:fixed; z-index:90; width:100%">
      <b-col md="12" >
        <Toolbar />
      </b-col>
        <b-col md="2">
            <Sidebar/>
        </b-col>
      </div>
      <b-col md="12">a</b-col>
      <b-col md="2"></b-col>
        <b-col class="routerview"   md="10">
          <div >
            <slot/>
          </div>
        </b-col>
      <b-row class="contentFooter">
      <b-col md="2">
      </b-col>
      <b-col class="slotFooter" md="10">
        <Footer />
      </b-col>
      </b-row>
    </b-row>
  </b-container>
</template>
<script>
import Footer from './Footer.vue';
import Sidebar from './Sidebar.vue';
import Toolbar from './Toolbar.vue';

export default {
  components: {
    Toolbar,
    Sidebar,
    Footer,
  },
};
</script>
<style lang='scss'>
.shadow {
  background-image:
  linear-gradient(to right, rgba(60,110,105,0.2),rgba(60,110,105,0.4), rgba(60,110,105,1));
}
.contentFooter {
  position:fixed !important;
  height:100px;
  z-index:99;
  bottom:0;
  width:106%
}
.routerview {
    background: url("~@/assets/img_background_body.png") 50% -100px no-repeat !important;
    background-size: cover;
    height:1000px;
    position:relative
}
.body {
    width: 100%;
    height: 100%;
    background-color: #3b6758;
    opacity: 0.5;
}
.slotFooter {
  background-color:#101213;
  border-top:solid 15px rgba(40,40,40,1)
}
</style>
