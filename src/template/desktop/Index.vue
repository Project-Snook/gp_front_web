<template>
  <b-container fluid>
    <Toolbar />
    <b-row>
        <b-col md="2">
            <Sidebar/>
        </b-col>
        <b-col md="10">
            <Body />
        </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Sidebar from './Sidebar.vue';
import Toolbar from './Toolbar.vue';
import Body from './Body.vue';

export default {
  components: {
    Toolbar,
    Sidebar,
    Body,
  },
};
</script>
