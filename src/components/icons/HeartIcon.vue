<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.0001 6.36393L13.1881 5.17178C15.1637 3.18937 18.2266 3.12908 20.2694 5.03239V5.03239C22.5683 7.17436 22.6876 10.9449 20.5294 13.2474L18.12 15.8178L13.2677 20.315C12.5403 20.9892 11.4587 20.9893 10.731 20.3154L9.11106 18.8149"
      stroke="#ffffff"
      stroke-width="1.5"
      stroke-linecap="round"
    />
    <path
      d="M11.9994 6.36395L10.8118 5.1721C8.83628 3.18953 5.77328 3.12914 3.73048 5.03248V5.03248C1.43163 7.17439 1.31231 10.9448 3.47051 13.2472L5.87995 15.8177L10.7314 20.3149C11.4588 20.9891 12.5403 20.9895 13.268 20.3157L14.8888 18.8148"
      stroke="#ffffff"
      stroke-width="1.5"
      stroke-linecap="round"
    />
  </svg>
</template>
<script>
export default {
  props: {
    width: {
      type: Number,
      default: 20,
    },
    height: {
      type: Number,
      default: 20,
    },
  },
};
</script>
