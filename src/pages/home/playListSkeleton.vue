<template>
  <div class="list-playlist flex items-center mt-[20px] justify-between gap-[20px]">
    <div class="list cursor-pointer" v-for="(i, index) in 5" :key="index">
      <g-skeleton-image :width="220" :height="220" :active="true" />

      <div class="list-playlist__name text-[14px] font-medium mt-[8px] text-ellipsis">
        <g-skeleton-text :active="true" />
      </div>
      <div class="list-playlist__content text-[14px] mt-[4px] text-[#66616E] font-medium">
        <g-skeleton-text :active="true" :width="'100px'" />
      </div>
    </div>
  </div>
</template>

<script>
import { GSkeletonText, GSkeletonImage } from '../../components/elements/skeleton';

export default {
  components: { GSkeletonText, GSkeletonImage },
};
</script>

<style lang="scss"></style>
