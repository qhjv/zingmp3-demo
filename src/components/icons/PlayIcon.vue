<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="5" y="4" width="4" height="17" rx="1" fill="white" />
    <rect x="14" y="4" width="4" height="17" rx="1" fill="white" />
  </svg>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 17,
    },
    height: {
      type: Number,
      default: 20,
    },
  },
};
</script>
