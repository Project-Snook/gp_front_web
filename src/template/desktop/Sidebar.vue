<template>
  <b-row>
    <b-col class='sidebar' md='12'>
        <Menu/>
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
.sidebar {
  background-color: rgba(57, 108, 103, 1);
  min-height: 1000px;
  position: fixed;
  border-right:solid 12px rgba(51,94,87,1);
}
</style>
