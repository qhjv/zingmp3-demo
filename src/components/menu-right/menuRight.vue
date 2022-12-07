<template>
  <transition
    name="ballmove"
    enter-active-class="animated zoomIn"
    leave-active-class="animated fadeOutDown"
    mode="out-in"
  >
    <div class="menu-right">
      <div class="title mb-5">Danh sách phát</div>
      <div v-if="listMusic?.length > 0">
        <div class="list-song" v-for="song in listMusic" :key="song.id">
          <div class="song-thumbnail img-center">
            <pause-icon class="pause-icon" />
            <img :src="song?.thumbnail" alt="" />
          </div>
          <div class="song-info">
            <div class="name">{{ song?.title }}</div>
            <div class="content">{{ song?.artistsNames }}</div>
          </div>
        </div>
      </div>
      <div v-else class="text-center text-gray-400">Danh sách trống</div>
    </div>
  </transition>
</template>

<script>
import PauseIcon from '../icons/PauseIcon.vue';
export default {
  props: {
    listMusic: {
      type: Object,
      default: [],
    },
  },
  components: { PauseIcon },
  mounted() {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.menu-right {
  color: #fff;
  width: 330px;
  border-left: 1px solid hsla(0, 0%, 100%, 0.1);
  background: #170f23;
  padding: 20px 15px;
  .title {
    font-size: 15px;
    font-weight: 600;
  }
  .list-song {
    display: flex;
    padding: 7px;
    align-items: flex-start;
    border-radius: 7px;
    cursor: default;
    &:hover {
      background: #2f2739;
      .song-thumbnail {
        img {
          opacity: 0.5 !important;
        }
        .pause-icon {
          opacity: 1 !important;
        }
      }
    }
    .song-thumbnail {
      position: relative;
      width: 40px;
      height: 40px;
      margin-right: 10px;
      overflow: hidden;
      border-radius: 5px;
      .pause-icon {
        cursor: pointer;
        transition: 0.2s all;
        opacity: 0;
        position: absolute;
        z-index: 2;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    .song-info {
      .name {
        font-size: 15px;
        font-weight: 600;
      }
      .content {
        font-size: 13px;
        color: hsla(0, 0%, 100%, 0.5);
        &:hover {
          text-decoration: underline;
          cursor: pointer;
          color: #c273ed;
        }
      }
    }
  }
}
</style>
