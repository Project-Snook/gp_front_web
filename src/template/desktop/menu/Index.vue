<template>
  <b-row>
    <b-col class='menu' md='12'>
      <ul v-for='(link, index) in linksToMenu' :key='index'>
        <span
          @mouseover='setShowMenu'
          @mouseleave='setBackMenu'>
          <router-link  tag='li' :to='link.to'>
            <span :style='linksStyle'>
              {{link.text}}
            </span>
          </router-link>
          <div v-if='link.child'>
            <span :style='showMenu' v-for='(childLink, index) in link.child' :key='index'>
              <router-link :to='childLink.to' tag='li'>{{childLink.text}}</router-link>
            </span>
          </div>
        </span>
      </ul>
    </b-col>
  </b-row>
</template>

<script>
import linksToMenu from './consts';

export default {
  data() {
    return {
      linksToMenu,
      linksStyle: {
        color: 'rgba(198,217,215,1)',
        cursor: 'pointer',
        backgroundColor: '',
      },
      showMenu: {
        display: 'none',
        fontSize: '16px',
        color: 'rgba(198,217,215,1)',
        backgroundColor: '#c2c2c2',
        paddingLeft: '6%',
        cursor: 'pointer',
      },
    };
  },
  methods: {
    setShowMenu() {
      this.showMenu.display = 'block';
    },
    setBackMenu() {
      this.showMenu.display = 'none';
    },
  },
};
</script>

<style lang='scss'>
li {
  list-style: none;
}
.menu {
  padding: 25px;
}
</style>
