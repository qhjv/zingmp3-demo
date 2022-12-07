<template>
  <div class="header-search" :class="{ 'is-collapse': songs?.length > 0 }">
    <div class="icon-search">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
          stroke="#dadada"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 22L20 20"
          stroke="#dadada"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>

    <div class="input-wrapper">
      <input
        type="text"
        class="form-control z-input-placeholder"
        placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
        value=""
        @input="handeChangeValue"
      />
    </div>
    <div class="search-dropdown" v-if="songs?.length > 0">
      <p class="search__title">Đề xuất cho bạn</p>
      <div class="list-song">
        <div class="song" v-for="song in songs" :key="song.id">
          <div class="song-thumbnail img-center" @click="handleClickPlaySong(song)">
            <pause-icon class="pause-icon" />
            <img :src="song?.thumbnail" alt="" />
          </div>
          <div class="song-info">
            <div class="name">{{ song?.title }}</div>
            <div class="content">{{ song?.artistsNames }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PauseIcon from '../icons/PauseIcon.vue';

export default {
  components: { PauseIcon },
  props: {
    songs: {
      type: Array,
      default: [],
    },
  },
  data() {
    return {
      showDropdown: false,
    };
  },
  mounted() {},
  computed: {},
  methods: {
    handeChangeValue(e) {
      let inputValue = e.target.value;
      this.$emit('input-change', inputValue);
    },
    handleClickPlaySong(song) {
      this.$emit('play-music', song);
    },
  },
};
</script>

<style lang="scss" scoped>
.header-search {
  position: relative;
  border-radius: 20px;
  height: 40px;
  width: 440px;
  background: #2c2436;
  transition: 0.3s;
  .icon-search {
    position: absolute;
    cursor: pointer;
    top: 48%;
    transform: translateY(-50%);
    left: 10px;
  }
  .input-wrapper {
    position: absolute;
    top: 48%;
    transform: translateY(-50%);
    left: 40px;
    right: 10px;
    color: var(--color-white);
    input {
      width: 100%;
      background: transparent;
      color: #ffffff;
      &:active {
        border: none;
      }
      &:focus-visible {
        border: none;
        outline: none;
      }
    }
  }
  .search-dropdown {
    position: absolute;
    width: 100%;
    top: 40px;
    background: #34224f;
    left: 0;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 0 4px 6px 0 rgb(32 33 36 / 28%);
    padding: 20px 10px;

    .search__title {
      font-size: 13px;
      font-weight: 600;
      display: flex;
      justify-content: space-between;
      margin-bottom: 20px;
      padding: 0 5px;
    }
    .list-song {
      padding: 0 10px;
      max-height: 200px;
      overflow: auto;
      .song {
        display: flex;
        padding: 7px;
        align-items: flex-start;
        border-radius: 7px;
        cursor: default;

        &:hover {
          background: #493961;

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
  }
}
.is-collapse {
  border-radius: 20px 20px 0 0;
  box-shadow: 0 1px 5px 0 rgb(0 0 0 / 20%);
  background-color: #34224f;
}
</style>
