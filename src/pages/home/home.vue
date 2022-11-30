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
      <div class="list-playlist flex items-center mt-[20px] justify-between">
        <div class="list cursor-pointer" v-for="list in playList" :key="list.id">
          <div class="list-playlist__img w-[220px] h-[220px] img-center rounded-lg">
            <img :src="list.img" alt="" />
          </div>
          <div class="list-playlist__name text-[14px] font-medium mt-[8px]">{{ list.name }}</div>
          <div class="list-playlist__content text-[14px] mt-[4px] text-[#66616E] font-medium">
            {{ list.content }}
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
          <div class="song flex items-center" v-for="song in songList" :key="song.id">
            <div class="col-1 flex items-center gap-3">
              <div class="icon-music">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 17.5C9 18.8807 7.88071 20 6.5 20C5.11929 20 4 18.8807 4 17.5C4 16.1193 5.11929 15 6.5 15C7.88071 15 9 16.1193 9 17.5ZM9 17.5V6L20 3V16.5M20 16.5C20 17.8807 18.8807 19 17.5 19C16.1193 19 15 17.8807 15 16.5C15 15.1193 16.1193 14 17.5 14C18.8807 14 20 15.1193 20 16.5Z"
                    stroke="#999"
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <div class="song-thumbnail rounded-[4px] w-[40px] h-[40px] img-center">
                <img :src="song.thumbnail" alt="" />
              </div>
              <div class="song-info">
                <div class="song-title">{{ song.title }}</div>
                <div class="song-artistsNames">{{ song.artistsNames }}</div>
              </div>
            </div>
            <div class="song-album col-2">{{ song.album.title }}</div>
            <div class="song-time col-3">{{ song.time }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playList: [
        {
          id: 1,
          img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_png/covers/a/5/a55db8b18b37cb07be9a4a5f1903cae1_1479465454.png',
          name: 'Karaoke',
          content: 'Quang Huy',
        },
        {
          id: 2,
          img: 'https://photo-playlist-zmp3.zmdcdn.me/s3/user-playlist?src=HavwqN7EvKCI1og5AfZbHm1SUTWxcEKAKH9ps3wOkGu45YwDQCIv2LSS8eewahuDKnmeXJZ2sGHL4KQ2DCBT0Lu76S5WpfjJLKnRY3Y5pne20HVFAPcM6LzB5yy_mubBKHr2c3Z4snbN6a2TQ9EF7bTE4iixnuWQ0HyHzMd1Zt494n3rOi2GBqjC7BCmozjj0XDNvtcRbY550ak-VSRI8KKQIgOjoTKWHK53yYoPs7jCHK_u8SY2UXaI7QuZoOel9HCHhqdDYYud5HUm58xU8c577FjMnu1fDGvFhmsHW6qdLHto6v609tDB6lGPb8SYS4PFfn2Oq2uhGKweIyw3BND75AbEp-Ke8XH_gK_7vY0W0YBWPo9z&size=thumb/240_240',
          name: 'Nhạc quẩy',
          content: 'Cực sung',
        },
        {
          id: 3,
          img: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/8/2/1/7/8217fdec71a8b30e8d8269afb31fd4a4.jpg',
          name: 'Edm',
          content: 'Alan',
        },
        {
          id: 4,
          img: 'https://photo-playlist-zmp3.zmdcdn.me/user-playlist?src=HavwqN7EvKCI1oYSFOdq0rnDF9mrYVO3L0HerspQybvJ1p-8CzYZ0580Eu5gYlO800LeZJtS_WbANI3UCPgi0W4VQOPwpkLLJ5CkbsQNvWXQKoxTOecuNbXJSzXWsxWANGTot67RkbK90IRSQD--L0a2JzLaqTDN1GDBrsx6ZnTG3ms5POtDNWz4MSmrm84P7bW0a6Y1WHa3MHtARj6AGrG959Kxr8z0MmmJnc7VtnHQLnJ6O8pVAGXJHgjdWTWl3LzOzIJJr6bVL1EtROsVFHO5Nligd8DaHLX8-ohMqIbA3HkW9T67A1y3IlrtYj0k701Fhd6FromQKq6e78dQA79LJQ4RZDC_A1SQhNq&size=thumb/240_240',
          name: 'Nhạc vàng thập niên XI',
          content: 'Hedhe hz',
        },
        {
          id: 5,
          img: 'https://photo-playlist-zmp3.zmdcdn.me/s1/user-playlist?src=HavwqN7EvKCI1oYSFOdq0r9DFfmwYVC3LGPiq3MB-bbLM3VVETAkMmPVDuW-qA0FLGrlt3pNfmXBLddVC97r0m0KC8TxnRnKJLXtbcUSkWbQM7VTDjRW2mfSTejaXhiA25HnYMcDkbrL0YVTFuow35u4IuqotzmEMGrAZ338ZamE0GpUEuFC1L5AM9Thpe12G5O1nZRUW48CKn_4D8lJ4bfJJ98qYT0I2LPAmMFVXnTP3HYJPTI1V0qB6FbiqOPz0mC6fogFYZjH24tbOz71RnXP0AaamDqsJWHAgIJMrYrAMHobTONJ8KrMIFSdYD1pIG0OyNJVXIKL1axq4zpKV7q1JliJtTTb84OUztq&size=thumb/240_240',
          name: 'Nostop',
          content: 'Bayz',
        },
      ],
      songList: [
        {
          id: 1,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
        {
          id: 2,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
        {
          id: 2,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
        {
          id: 2,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
        {
          id: 2,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
        {
          id: 2,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
        {
          id: 2,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
        {
          id: 2,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
        {
          id: 2,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
        {
          id: 2,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
        {
          id: 2,
          title: 'Chỉ anh hiểu em',
          thumbnail:
            'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
          link: '',
          artistsNames: 'Khắc Việt',
          album: { title: 'Lại 1 lần nữa' },
          time: '3.01',
        },
      ],
    };
  },
  components: {},
  mounted() {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.home-page {
  color: #fff;
  padding: 120px 0 200px 0;
  .table {
    width: 100%;
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
    }
  }
}
</style>
