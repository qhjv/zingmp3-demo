<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 10 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.70742 6.79519L1.25877 0.881139C0.728548 0.509984 0 0.889306 0 1.53652V12.4635C0 13.1107 0.728549 13.49 1.25877 13.1189L9.70742 7.20481C9.8496 7.10528 9.8496 6.89472 9.70742 6.79519Z"
      fill="#fff"
    />
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
      default: 17,
    },
  },
};
</script>
