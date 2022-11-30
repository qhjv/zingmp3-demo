<template>
  <div class="menu-left">
    <div class="">
      <div class="">
        <div class="menu-logo">
          <router-link to="/">
            <img src="../../assets/images/logo.png" alt="logo" />
          </router-link>
        </div>
        <nav class="nav-main">
          <div
            v-for="item in menuOptions"
            :key="item.name"
            @click="handleChangeRoute(item.page)"
            class="cursor-pointer"
          >
            <div
              class="menu text-white"
              :class="{
                'menu-active': selectedItem === item.page,
              }"
            >
              {{ item.name }}
            </div>
          </div>
        </nav>
        <div class="sidebar-divide"></div>
      </div>
    </div>
  </div>
</template>
<script>
import { menuLeft } from './menuleft.js';

export default {
  props: ['setVisible'],
  components: {},
  data() {
    return {
      selectedItem: 'home-page',
    };
  },
  computed: {
    menuOptions() {
      return menuLeft;
    },
  },
  mounted() {},
  methods: {
    handleChangeRoute(routeName) {
      this.$router.push({ name: routeName });
    },
  },
  watch: {
    '$route.name': {
      immediate: true,
      handler(_name) {
        this.selectedItem = _name;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.menu-left {
  position: relative;
  z-index: 100;
  width: 240px;
  height: 100%;
  background: #231b2e;
  color: var(--color-white);

  .menu-logo {
    padding: 20px;
    img {
      cursor: pointer;
      width: 120px;
    }
  }
  .nav-main {
    margin-bottom: 15px;
    .menu {
      display: flex;
      align-items: center;
      font-size: 13px;
      font-weight: 700;
      padding: 8px 25px;
      color: #dadada;
    }
    .menu-active {
      background-color: hsla(0, 0%, 100%, 0.05);
      color: #fff;
      border-left: 3px solid #9b4de0;
    }
  }
  .sidebar-divide {
    position: relative;
    height: 1px;
    &::after {
      content: '';
      border-top: 1px solid #474747;
      position: absolute;
      left: 25px;
      right: 25px;
      top: 0;
    }
  }
}
</style>
