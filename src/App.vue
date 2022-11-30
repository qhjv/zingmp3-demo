<template>
  <MainLayout :layout="layout" />
</template>

<script>
import MainLayout from './layouts/MainLayout.vue';

export default {
  components: { MainLayout },
  mounted() {},
  computed: {
    layout() {
      console.log(this.$route);
      return this.$route?.meta?.layout;
    },
  },
};
</script>

<style lang="scss">
@import './assets/scss/app.scss';
</style>
