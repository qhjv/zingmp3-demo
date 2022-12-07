<template>
  <div class="song flex items-center" v-for="(i, index) in 5" :key="index">
    <div class="col-1 flex items-center gap-3">
      <div class="icon-music">
        <music-icon />
      </div>
      <g-skeleton-image :width="40" :height="40" :active="true" />
      <div class="song-info mt-2">
        <g-skeleton-text :active="true" :width="'100px'" />
        <g-skeleton-text :active="true" :width="'100px'" />
      </div>
    </div>
    <div class="song-album col-2"><g-skeleton-text :active="true" :width="'150px'" /></div>
    <div class="song-time col-3"><g-skeleton-text :active="true" :width="'50px'" /></div>
  </div>
</template>

<script>
import { GSkeletonText, GSkeletonImage } from '../../components/elements/skeleton';
import MusicIcon from '../../components/icons/MusicIcon.vue';

export default {
  components: { MusicIcon, GSkeletonText, GSkeletonImage },
};
</script>

<style lang="scss" scoped>
.col-1 {
  width: 50%;
}
.col-2 {
  flex: 1;
}
.song {
  cursor: default;
  padding: 7px 15px;
  border-radius: 5px;
  border-top: 1px solid hsla(0, 0%, 100%, 0.05);

  &:hover {
    background: #2f2739;
  }
  .song-title {
    font-weight: 600;
  }
  .song-artistsNames {
    font-size: 13px;
    color: hsla(0, 0%, 100%, 0.5);
    &:hover {
      text-decoration: underline;
      cursor: pointer;
      color: #c273ed;
    }
  }
  .song-time,
  .song-album {
    color: hsla(0, 0%, 100%, 0.5);
  }
  .song-time {
    font-size: 12px;
  }
}
</style>
