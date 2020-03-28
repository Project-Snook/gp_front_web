<template>
    <div id='app'>
  <TemplateDesktop>
      <router-view />
  </TemplateDesktop>
    </div>
</template>
<script>
import TemplateDesktop from './template/desktop/Index.vue';

export default {
  components: {
    TemplateDesktop,
  },
};
</script>
<style lang='scss'>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
::-webkit-scrollbar              { background-color:#214b47; width:25px; }
::-webkit-scrollbar-thumb        { background-color:#132c29 }

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
  body { cursor:url('http://cur.cursors-4u.net/games/gam-3/gam243.ani') 5 12, url('http://cur.cursors-4u.net/games/gam-3/gam243.png') 25 25, auto !important;}
</style>
