<template>
  <div class="playing flex items-center cursor-pointer justify-between">
    <div class="col-1 flex items-center gap-3">
      <div class="playing-thumbnail img-center">
        <img :src="music.thumbnail" alt="" />
      </div>
      <div class="playing-info">
        <div class="playing-title">{{ music.title }}</div>
        <div class="playing-artistsNames">{{ music.artistsNames }}</div>
      </div>
      <div class="playing-actions flex items-center gap-5 ml-8">
        <div class="button-factory cursor-pointer">
          <svg
            width="20"
            height="20"
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
        </div>
        <div class="button-more cursor-pointer">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 12C6 10.8954 5.10457 10 4 10C2.89543 10 2 10.8954 2 12C2 13.1046 2.89543 14 4 14C5.10457 14 6 13.1046 6 12Z"
              stroke="#fff"
              stroke-width="1.5"
            />
            <path
              d="M14 12C14 10.8954 13.1046 10 12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12Z"
              stroke="#fff"
              stroke-width="1.5"
            />
            <path
              d="M22 12C22 10.8954 21.1046 10 20 10C18.8954 10 18 10.8954 18 12C18 13.1046 18.8954 14 20 14C21.1046 14 22 13.1046 22 12Z"
              stroke="#fff"
              stroke-width="1.5"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="playing-controls w-[40vw]">
        <div class="actions">
          <div class="action action-shuffle">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.56024 18.74C5.56024 18.74 5.55025 18.74 5.54025 18.74L2.99023 18.73C2.58023 18.73 2.24023 18.39 2.24023 17.98C2.24023 17.57 2.58023 17.23 2.99023 17.23L5.54025 17.24H5.55023C6.20023 17.24 6.81026 16.92 7.17026 16.37L13.5602 6.78998C14.2002 5.82998 15.2702 5.25 16.4302 5.25C16.4302 5.25 16.4403 5.25 16.4503 5.25L21.0002 5.27002C21.4102 5.27002 21.7502 5.61002 21.7502 6.02002C21.7502 6.43002 21.4102 6.77002 21.0002 6.77002L16.4503 6.75H16.4402C15.7902 6.75 15.1803 7.07 14.8203 7.62L8.43024 17.2C7.79024 18.17 6.72024 18.74 5.56024 18.74Z"
                fill="#fff"
              />
              <path
                d="M18.9999 20.7299C18.8099 20.7299 18.6199 20.6599 18.4699 20.5099C18.1799 20.2199 18.1799 19.7399 18.4699 19.4499L20.4699 17.4499C20.7599 17.1599 21.2399 17.1599 21.5299 17.4499C21.8199 17.7399 21.8199 18.2199 21.5299 18.5099L19.5299 20.5099C19.3799 20.6599 19.1899 20.7299 18.9999 20.7299Z"
                fill="#fff"
              />
              <path
                d="M8.89001 9.37976C8.66001 9.37976 8.43 9.26976 8.28 9.06976L7.20001 7.56976C6.83001 7.05976 6.21999 6.75977 5.60999 6.75977L3 6.76978C2.54 6.75978 2.25 6.43978 2.25 6.01978C2.25 5.60978 2.58 5.26978 3 5.26978L5.60999 5.25977C5.61999 5.25977 5.62 5.25977 5.63 5.25977C6.74001 5.25977 7.77999 5.79976 8.42999 6.68976L9.51001 8.18976C9.75001 8.52976 9.68 8.98975 9.34 9.23975C9.2 9.32975 9.05001 9.37976 8.89001 9.37976Z"
                fill="#fff"
              />
              <path
                d="M16.32 18.7499C15.26 18.7499 14.24 18.2499 13.59 17.4099L12.37 15.84C12.12 15.51 12.18 15.0399 12.5 14.7899C12.83 14.5399 13.3 14.5999 13.55 14.9199L14.77 16.4899C15.14 16.9699 15.73 17.2099 16.32 17.2499L20.99 17.2299C21.4 17.2299 21.74 17.5599 21.74 17.9799C21.74 18.3899 21.41 18.7299 20.99 18.7299L16.32 18.7499C16.33 18.7499 16.32 18.7499 16.32 18.7499Z"
                fill="#fff"
              />
              <path
                d="M20.9999 6.76999C20.8099 6.76999 20.6199 6.69996 20.4699 6.54996L18.4699 4.54996C18.1799 4.25996 18.1799 3.77996 18.4699 3.48996C18.7599 3.19996 19.2399 3.19996 19.5299 3.48996L21.5299 5.48996C21.8199 5.77996 21.8199 6.25996 21.5299 6.54996C21.3799 6.69996 21.1899 6.76999 20.9999 6.76999Z"
                fill="#fff"
              />
            </svg>
          </div>
          <div class="action action-prev">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.6901 20.0902C17.1201 20.0902 16.5601 19.9402 16.0401 19.6402L7.75009 14.8602C6.72009 14.2602 6.1001 13.1902 6.1001 12.0002C6.1001 10.8102 6.72009 9.74019 7.75009 9.14019L16.0401 4.36016C17.0701 3.76016 18.3001 3.76016 19.3401 4.36016C20.3801 4.96016 20.9901 6.02017 20.9901 7.22017V16.7902C20.9901 17.9802 20.3701 19.0502 19.3401 19.6502C18.8201 19.9402 18.2601 20.0902 17.6901 20.0902ZM17.6901 5.41017C17.3801 5.41017 17.0701 5.49016 16.7901 5.65016L8.50009 10.4302C7.94009 10.7602 7.6001 11.3402 7.6001 11.9902C7.6001 12.6402 7.94009 13.2202 8.50009 13.5502L16.7901 18.3302C17.3501 18.6602 18.0301 18.6602 18.5901 18.3302C19.1501 18.0002 19.4901 17.4202 19.4901 16.7702V7.20018C19.4901 6.55018 19.1501 5.97019 18.5901 5.64019C18.3101 5.50019 18.0001 5.41017 17.6901 5.41017Z"
                fill="#fff"
              />
              <path
                d="M3.75977 18.9298C3.34977 18.9298 3.00977 18.5898 3.00977 18.1798V5.81982C3.00977 5.40982 3.34977 5.06982 3.75977 5.06982C4.16977 5.06982 4.50977 5.40982 4.50977 5.81982V18.1798C4.50977 18.5898 4.16977 18.9298 3.75977 18.9298Z"
                fill="#fff"
              />
            </svg>
          </div>
          <div class="action action-pause">
            <svg
              width="17"
              height="17"
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
          <div class="action action-next">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.30975 20.0899C5.73975 20.0899 5.17976 19.9399 4.65976 19.6399C3.61976 19.0399 3.00977 17.9799 3.00977 16.7799V7.20989C3.00977 6.01989 3.62976 4.9499 4.65976 4.3499C5.69976 3.7499 6.92975 3.7499 7.95975 4.3499L16.2498 9.1299C17.2798 9.7299 17.8997 10.7999 17.8997 11.9899C17.8997 13.1799 17.2798 14.2499 16.2498 14.8499L7.95975 19.6299C7.43975 19.9399 6.87975 20.0899 6.30975 20.0899ZM6.30975 5.4099C5.99975 5.4099 5.68976 5.48989 5.40976 5.64989C4.84976 5.97989 4.50977 6.55989 4.50977 7.20989V16.7799C4.50977 17.4299 4.84976 18.0099 5.40976 18.3399C5.96976 18.6599 6.64975 18.6699 7.20975 18.3399L15.4998 13.5599C16.0598 13.2299 16.3997 12.6499 16.3997 11.9999C16.3997 11.3499 16.0598 10.7699 15.4998 10.4399L7.20975 5.6599C6.92975 5.4999 6.61975 5.4099 6.30975 5.4099Z"
                fill="#fff"
              />
              <path
                d="M20.2402 18.9303C19.8302 18.9303 19.4902 18.5903 19.4902 18.1803V5.82031C19.4902 5.41031 19.8302 5.07031 20.2402 5.07031C20.6502 5.07031 20.9902 5.41031 20.9902 5.82031V18.1803C20.9902 18.5903 20.6602 18.9303 20.2402 18.9303Z"
                fill="#fff"
              />
            </svg>
          </div>
          <div class="action action-repeat">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8L3.29289 7.29289L2.58579 8L3.29289 8.70711L4 8ZM19 10C19 10.5523 19.4477 11 20 11C20.5523 11 21 10.5523 21 10H19ZM7.29289 3.29289L3.29289 7.29289L4.70711 8.70711L8.70711 4.70711L7.29289 3.29289ZM3.29289 8.70711L7.29289 12.7071L8.70711 11.2929L4.70711 7.29289L3.29289 8.70711ZM4 9H18V7H4V9ZM18 9C18.5523 9 19 9.44772 19 10H21C21 8.34315 19.6569 7 18 7V9Z"
                fill="#fff"
              />
              <path
                d="M20 16L20.7071 15.2929L21.4142 16L20.7071 16.7071L20 16ZM5 16L5 17L5 17L5 16ZM2 14C2 13.4477 2.44772 13 3 13C3.55228 13 4 13.4477 4 14L2 14ZM16.7071 11.2929L20.7071 15.2929L19.2929 16.7071L15.2929 12.7071L16.7071 11.2929ZM20.7071 16.7071L16.7071 20.7071L15.2929 19.2929L19.2929 15.2929L20.7071 16.7071ZM20 17L5 17L5 15L20 15L20 17ZM5 17C3.34315 17 2 15.6569 2 14L4 14C4 14.5523 4.44772 15 5 15L5 17Z"
                fill="#fff"
              />
            </svg>
          </div>
        </div>
        <div class="bar w-100 flex items-center justify-between gap-3">
          <span class="time left">00:02</span>
          <div class="progress-bar">
            <input class="time-bar flex-1" type="range" min="0" step="1" />
            <span class="progressbar__bg">
              <span class="progressbar__state" style="width: calc(0%)"></span>
            </span>
          </div>
          <span class="time right">3:09</span>
        </div>
      </div>
    </div>
    <div class="col-3">
      <div class="volume"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      music: {
        id: 1,
        title: 'Chỉ anh hiểu em',
        thumbnail:
          'https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/avatars/d/c/dc2fc8c141ed304be14ea8f0596956ce_1457342463.jpg',
        link: '',
        artistsNames: 'Khắc Việt',
        album: { title: 'Lại 1 lần nữa' },
        time: '3.01',
      },
    };
  },
  components: {},
  mounted() {},
  computed: {},
};
</script>

<style lang="scss" scoped>
.playing {
  color: #fff;
  position: fixed;
  z-index: 99999;
  width: 100%;
  bottom: 0;
  left: 0;
  height: 90px;
  background: #130c1c;
  padding: 0 20px;
  .playing-thumbnail {
    width: 64px;
    height: 64px;
    border-radius: 10px;
  }
  .playing-title {
    font-weight: 600;
  }
  .playing-artistsNames {
    font-size: 13px;
    color: hsla(0, 0%, 100%, 0.5);
    &:hover {
      text-decoration: underline;
      cursor: pointer;
      color: #c273ed;
    }
  }
  .playing-controls {
    .actions {
      margin-bottom: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 30px;
      .action-pause {
        width: 42px;
        height: 42px;
        border: 2px solid #fff;
        padding-left: 3px;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
    .bar {
      .progress-bar {
        flex: 1;
        position: relative;
        .time-bar {
          cursor: pointer;
          position: absolute;
          top: -8px;
          left: -3px;
          width: calc(100% + 3px);
          z-index: 10;
          opacity: 0;
        }
        .progressbar__bg {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: #5a5561;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>