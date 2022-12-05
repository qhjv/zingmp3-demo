<template>
  <div class="home-page pt-[70px]">
    <div class="library">
      <div class="title flex items-center">
        <h1 class="text-[40px] font-bold">Thư viện</h1>
        <div
          class="button-listen pl-[2px] rounded-full bg-[#8B45CA] h-[40px] w-[40px] flex-center cursor-pointer ml-[14px]"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 10 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.70742 6.79519L1.25877 0.881139C0.728548 0.509984 0 0.889306 0 1.53652V12.4635C0 13.1107 0.728549 13.49 1.25877 13.1189L9.70742 7.20481C9.8496 7.10528 9.8496 6.89472 9.70742 6.79519Z"
              fill="#fff"
            />
          </svg>
        </div>
      </div>
      <div class="add-playlist flex items-center justify-between mt-[48px]">
        <div class="button-add flex items-center">
          <h5 class="text-[20px] font-bold">PLAYLIST</h5>
          <div
            class="rounded-full bg-[#2C2436] h-[26px] w-[26px] flex-center cursor-pointer ml-[10px]"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6L12 18"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
              <path
                d="M18 12L6 12"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="square"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div class="button-all flex items-center cursor-pointer">
          <h5 class="text-[14px] text-[#999] font-medium">TẤT CẢ</h5>
          <div class="button ml-[8px]">
            <svg
              width="9"
              height="14"
              viewBox="0 0 9 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 7L7.70711 6.29289L8.41421 7L7.70711 7.70711L7 7ZM1.70711 0.292893L7.70711 6.29289L6.29289 7.70711L0.292893 1.70711L1.70711 0.292893ZM7.70711 7.70711L1.70711 13.7071L0.292893 12.2929L6.29289 6.29289L7.70711 7.70711Z"
                fill="#999"
              />
            </svg>
          </div>
        </div>
      </div>
      <div class="list-playlist flex items-center mt-[20px] justify-between gap-[20px]">
        <div class="list cursor-pointer" v-for="list in playList" :key="list.id">
          <div class="list-playlist__img w-[220px] h-[220px] img-center rounded-lg">
            <img :src="list.thumbnail" alt="" />
          </div>
          <div class="list-playlist__name text-[14px] font-medium mt-[8px] text-ellipsis">
            {{ list.title }}
          </div>
          <div class="list-playlist__content text-[14px] mt-[4px] text-[#66616E] font-medium">
            {{ list.artistsNames }}
          </div>
        </div>
      </div>
      <div class="tabs text-[14px] font-medium flex my-[30px]">
        <div class="tab">BÀI HÁT</div>
      </div>
      <div class="table">
        <div class="table-header flex">
          <div class="col-1">BÀI HÁT</div>
          <div class="col-2">ALBUM</div>
          <div class="col-3">THỜI GIAN</div>
        </div>
        <div class="table-list">
          <div
            class="song flex items-center"
            v-for="song in songList"
            :key="song.id"
            @click="handleClickPlayingMusic(song)"
          >
            <div class="col-1 flex items-center gap-3">
              <div class="icon-music">
                <music-icon />
              </div>
              <div class="song-thumbnail rounded-[4px] w-[40px] h-[40px] img-center">
                <img :src="song?.thumbnail" alt="" />
              </div>
              <div class="song-info">
                <div class="song-title">{{ song.title }}</div>
                <div class="song-artistsNames">{{ song?.artistsNames }}</div>
              </div>
            </div>
            <div class="song-album col-2">{{ song?.album?.title }}</div>
            <div class="song-time col-3">{{ convertTimeMinutes(song.duration) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ZingMp3Service from '../../services/songs.service.js';
import { convertTime } from '../../utils/index.js';
import MusicIcon from '../../components/icons/MusicIcon.vue';

export default {
  data() {
    return {
      playList: [],
      songList: [],
    };
  },
  components: { MusicIcon },
  mounted() {
    this.getMusic();
    this.getPlaylist();
  },
  computed: {},
  methods: {
    convertTimeMinutes(value) {
      return convertTime(value);
    },

    async getMusic() {
      try {
        const response = await ZingMp3Service.getMusicHome();
        if (response.data?.msg === 'Success') {
          this.songList = response.data.data.items.map((song) => {
            return {
              ...song,
              link: 'https://s1.mp3.aka.zdn.vn/2372a0a374e29dbcc4f3/6344358420396209001?authen=exp=1670384943~acl=/2372a0a374e29dbcc4f3/*~hmac=74c943c3723927b3e78cc2a34b4c394a',
            };
          });
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getPlaylist() {
      try {
        const response = await ZingMp3Service.getPlaylist();
        if (response.data?.msg === 'Success') {
          this.playList = response.data.data[0].items.slice(5);
        }
      } catch (error) {
        console.log(error);
      }
    },

    handleClickPlayingMusic(song) {
      this.$store.commit('playing/setPlaying', song);
    },
  },
};
</script>

<style lang="scss" scoped>
.home-page {
  color: #fff;
  padding: 120px 0 200px 0;
  .list {
    width: 25%;
  }
  .table {
    width: 100%;
    .list-playlist__name {
      width: 100%;
      overflow: hidden;
    }
    .col-1 {
      width: 50%;
    }
    .col-2 {
      flex: 1;
    }
    .table-header {
      font-size: 12px;
      font-weight: 500;
      display: flex;
      align-items: center;
      color: hsla(0, 0%, 100%, 0.5);
      justify-content: space-between;
      height: 46px;
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
  }
}
</style>
