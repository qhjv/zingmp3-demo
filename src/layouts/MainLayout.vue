<template>
  <main id="main-app" v-show="listLayout.includes('main')">
    <menu-left v-if="listLayout.includes('main-left')"></menu-left>
    <Playing v-if="musicPlaying.length !== 0" :music="musicPlaying" />
    <div class="main-content relative" v-show="listLayout.includes('main-content')">
      <Header />
      <div class="wrapper relative w-full relative flex flex-col flex-1 overflow-auto">
        <router-view />
      </div>
    </div>
    <menu-right v-show="showListPlaying" :listMusic="musicPlaying" />
  </main>
</template>

<script>
import MenuLeft from '../components/menu-left/menuLeft.vue';
import Header from '../components/header/header.vue';
import MenuRight from '../components/menu-right/menuRight.vue';
import Playing from '../components/playing/playing.vue';
import { mapState } from 'vuex';

const LAYOUTS = {
  main: ['main', 'main-left', 'main-content'],
  blank: ['main', 'main-content'],
};
export default {
  components: { MenuRight, Header, MenuLeft, Playing },
  props: {
    layout: {
      type: String,
      default: 'blank',
    },
  },
  data() {
    return {
      visibleModal: {
        sidebarOpen: false,
      },
    };
  },
  computed: {
    ...mapState({
      musicPlaying: (state) => state.playing.listPlaying || [],
      showListPlaying: (state) => state.playing.show || false,
    }),
    listLayout() {
      return LAYOUTS[this.layout];
    },
  },
  mounted() {},
  watch: {},
  methods: {
    setVisibleModal(field) {
      return (value) => {
        this.visibleModal = {
          ...this.visibleModal,
          [field]: value,
        };
      };
    },
  },
};
</script>

<style lang="scss" scoped>
main {
  display: flex;
  height: 100vh;
  .main-content {
    display: flex;
    flex-direction: column;
    flex: 1;
    background: #170f23;
    color: var(--color-white);
    transition: 0.3s;
    .wrapper {
      padding: 0 60px;
    }
  }
}
</style>
