<template>
  <b-row>
    <b-col class="sidebar" md="12">
      <div class="img_body_menu">
        <Menu />
      </div>
    </b-col>
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
.img_body_menu {
  height: 100%;
  opacity: 0.4;
  background: url("~@/assets/img_background_menu.png") no-repeat;
  background-size: 100% 100%;
}
.sidebar {
  background-color: rgba(57, 108, 103, 1);
  min-height: 1000px;
  position: fixed;
  border-right: solid 12px rgba(51, 94, 87, 1);
  width: 100%;
}
</style>
