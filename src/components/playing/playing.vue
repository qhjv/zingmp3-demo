<template>
  <div class="playing flex items-center cursor-pointer justify-between">
    <div class="col-1 flex items-center gap-3">
      <div class="playing-thumbnail img-center">
        <img :src="music[0]?.thumbnail" alt="" />
      </div>
      <div class="playing-info">
        <div class="playing-title">{{ music[0]?.title }}</div>
        <div class="playing-artistsNames">{{ music[0]?.artistsNames }}</div>
      </div>
      <div class="playing-actions flex items-center gap-5 ml-8">
        <div class="button-factory cursor-pointer">
          <heart-icon />
        </div>
        <div class="button-more cursor-pointer">
          <more-icon />
        </div>
      </div>
    </div>
    <div class="col-2">
      <div class="playing-controls">
        <div class="actions">
          <div class="action action-shuffle">
            <shuffle-icon />
          </div>
          <div class="action action-prev">
            <prev-icon />
          </div>
          <div class="action action-pause" v-if="!currentlyPlaying" @click="playAudio">
            <pause-icon />
          </div>
          <div class="action action-play" v-else @click="stopAudio">
            <play-icon />
          </div>
          <div class="action action-next">
            <next-icon />
          </div>
          <div class="action action-repeat">
            <repeat-icon />
          </div>
        </div>
        <div class="bar w-100 flex items-center justify-between gap-3">
          <span class="time left">{{ convertTimeMinutes(currentTime) }}</span>
          <div class="progress-bar flex-1">
            <input class="time-bar flex-1" type="range" min="0" step="1" @click="updateProgress" />
            <span class="progressbar__bg">
              <span class="progressbar__state" :style="{ width: currentProgressBar + '%' }"></span>
            </span>
          </div>
          <span class="time right">{{ convertTimeMinutes(trackDuration) }}</span>
        </div>
      </div>
    </div>
    <div class="col-3 flex items-center justify-end gap-3">
      <div class="voice">
        <voice-icon />
      </div>
      <div class="view">
        <view-icon />
      </div>
      <div class="volume flex items-center justify-center">
        <div class="icon-volume">
          <volume-icon />
        </div>
        <div class="progress-bar w-[70px] ml-[10px] mb-[2px]">
          <input class="time-bar w-[70px]" type="range" min="0" step="1" />
          <span class="progressbar__bg">
            <span class="progressbar__state" style="width: calc(0%)"></span>
          </span>
        </div>
      </div>
      <div class="line"></div>
      <div class="list-playing-button pt-[1px]">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M3.5 5.00134H13.5C14.05 5.00134 14.5 5.45134 14.5 6.00134C14.5 6.55134 14.05 7.00134 13.5 7.00134H3.5C2.95001 7.00134 2.5 6.55134 2.5 6.00134C2.5 5.45134 2.95001 5.00134 3.5 5.00134ZM3.5 9.00134H13.5C14.05 9.00134 14.5 9.45134 14.5 10.0013C14.5 10.5513 14.05 11.0013 13.5 11.0013H3.5C2.95001 11.0013 2.5 10.5513 2.5 10.0013C2.5 9.45134 2.95001 9.00134 3.5 9.00134ZM3.5 15.0013H9.5C10.05 15.0013 10.5 14.5513 10.5 14.0013C10.5 13.4513 10.05 13.0013 9.5 13.0013H3.5C2.95001 13.0013 2.5 13.4513 2.5 14.0013C2.5 14.5513 2.95001 15.0013 3.5 15.0013ZM16.5 7.00134C16.5 5.90134 17.4 5.00134 18.5 5.00134H20.5C21.05 5.00134 21.5 5.45134 21.5 6.00134C21.5 6.55134 21.05 7.00134 20.5 7.00134H18.5V16.0013C18.5 17.8413 16.86 19.2813 14.96 18.9513C13.75 18.7413 12.76 17.7513 12.55 16.5413C12.22 14.6413 13.66 13.0013 15.5 13.0013C15.85 13.0013 16.19 13.0713 16.5 13.1813V7.00134Z"
            fill="#fff"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import PlayIcon from '../icons/PlayIcon.vue';
import PauseIcon from '../icons/PauseIcon.vue';
import NextIcon from '../icons/NextIcon.vue';
import PrevIcon from '../icons/PrevIcon.vue';
import ShuffleIcon from '../icons/ShuffleIcon.vue';
import RepeatIcon from '../icons/RepeatIcon.vue';
import VoiceIcon from '../icons/VoiceIcon.vue';
import VolumeIcon from '../icons/VolumeIcon.vue';
import ViewIcon from '../icons/ViewIcon.vue';
import HeartIcon from '../icons/HeartIcon.vue';
import MoreIcon from '../icons/MoreIcon.vue';
import { convertTime } from '../../utils/index.js';
export default {
  props: {
    music: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      audio: '',
      audioFile: '',
      currentSong: 0,
      currentlyPlaying: false,
      currentlyStopped: false,
      currentTime: 0,
      checkingCurrentPositionInTrack: '',
      trackDuration: 0,
      currentProgressBar: 0,
      isPlaylistActive: false,
    };
  },
  components: {
    MoreIcon,
    HeartIcon,
    ViewIcon,
    VolumeIcon,
    VoiceIcon,
    RepeatIcon,
    ShuffleIcon,
    PrevIcon,
    NextIcon,
    PauseIcon,
    PlayIcon,
  },
  mounted() {
    // this.changeSong();
    // this.audio.loop = false;
  },
  computed: {},
  methods: {
    convertTimeMinutes(value) {
      return convertTime(value);
    },

    changeSong(index) {
      console.log(index);
      const wasPlaying = this.currentlyPlaying;

      if (index !== undefined) {
        this.stopAudio();
        this.currentSong = index;
      }

      this.audioFile = this.music[this.currentSong].link;
      this.audio = new Audio(this.audioFile);
      this.audio.addEventListener('loadedmetadata', () => {
        this.trackDuration = Math.round(this.audio.duration);
        console.log(this.audio.duration);
      });
      this.audio.addEventListener('ended', this.handleEnded);

      this.playAudio();
    },

    handleEnded() {
      if (this.currentSong + 1 === this.music.length) {
        this.stopAudio();
        this.currentlyPlaying = false;
        this.currentlyStopped = true;
      } else {
        this.currentlyPlaying = false;
        this.currentSong++;
        this.changeSong();
        this.playAudio();
      }
    },

    playAudio() {
      if (this.currentlyStopped && this.currentSong + 1 === this.music.length) {
        this.currentSong = 0;
        this.changeSong();
      }
      if (!this.currentlyPlaying) {
        this.getCurrentTimeEverySecond(true);
        this.currentlyPlaying = true;
        this.audio.play();
      } else {
        this.stopAudio();
      }
      this.currentlyStopped = false;
    },

    stopAudio() {
      if (this.currentlyPlaying) {
        this.audio.pause();
        this.currentlyPlaying = false;
        this.pausedMusic();
      }
    },

    pausedMusic() {
      clearTimeout(this.checkingCurrentPositionInTrack);
    },

    nextSong() {
      if (this.currentSong < this.music.length - 1) this.changeSong(this.currentSong + 1);
    },

    prevSong() {
      if (this.currentSong > 0) this.changeSong(this.currentSong - 1);
    },

    updateProgress(e) {
      this.stopAudio();
      console.log(e.pageX);
    },

    getCurrentTimeEverySecond: function (startStop) {
      this.checkingCurrentPositionInTrack = setTimeout(() => {
        this.currentTime = this.audio.currentTime;
        this.currentProgressBar = (this.audio.currentTime / this.trackDuration) * 100;
        this.getCurrentTimeEverySecond(true);
      }, 1000);
    },
  },
  watch: {
    music: {
      immediate: true,
      handler() {
        this.changeSong(0);
      },
    },
    currentTime: function () {
      this.currentTime = Math.round(this.currentTime);
    },
  },

  beforeDestroy: function () {
    this.audio.removeEventListener('ended', this.handleEnded);
    this.audio.removeEventListener('loadedmetadata', this.handleEnded);

    clearTimeout(this.checkingCurrentPositionInTrack);
  },
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

  .col-1 {
    width: 30%;
  }

  .col-2 {
    flex: 1;
  }

  .col-3 {
    width: 30%;

    .line {
      width: 1px;
      height: 30px;
      background: #2b2533;
    }

    .list-playing-button {
      width: 30px;
      height: 30px;
      background: #2b2533;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 5px;
    }
  }

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

      .action-pause,
      .action-play {
        width: 42px;
        height: 42px;
        border: 2px solid #fff;
        border-radius: 999px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .action-pause {
        padding-left: 3px;
      }
    }
  }
  .time {
    font-size: 12px;
    color: #fff;
    font-weight: 500;
  }

  .time.left {
    opacity: 0.5;
  }
  .progress-bar {
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
    .progressbar__state {
      position: absolute;
      top: 0;
      left: 0;
      height: 3px;
      background: #fff;
      border-radius: 2px;
    }
  }
}
</style>
