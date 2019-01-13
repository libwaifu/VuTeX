<template>
    <d-player :options="options"
              @play="play"
              ref="player">
    </d-player>
</template>

<script>

import Vue from 'vue';
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'
export default {
  data() {
    return {
      options: {
        video: {
          url: 'https://xn.tn/?/%E8%A7%86%E9%A2%91%E6%B5%8B%E8%AF%95/test.mp4',
          pic: 'https://camo.githubusercontent.com/0ade48acd75de2208c39e3c499f84c2fbfce47ba/687474703a2f2f692e696d6775722e636f6d2f323037636833362e6a7067'
        },
        autoplay: false,
        contextmenu: [
          {
            text: 'GitHub',
            link: 'https://github.com/MoePlayer/vue-dplayer'
          }
        ]
      },
      player: null,
    }
  },
  mounted() {
    this.player = this.$refs.player.dp
  },
  methods: {
    play() {
      console.log('play callback')
    }
  },
  components: {
    'd-player': VueDPlayer
  }
}

</script>

<style>
/*
不能播放 avi


*/
</style>