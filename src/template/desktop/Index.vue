<template>
  <b-container fluid>
    <Toolbar />
    <b-row>
        <b-col md="2">
            <Sidebar/>
        </b-col>
        <b-col md="10">
            <slot />
        </b-col>
    </b-row>
  </b-container>
</template>
<script>
import Sidebar from './Sidebar.vue';
import Toolbar from './Toolbar.vue';

export default {
  components: {
    Toolbar,
    Sidebar,
  },
};
</script>
