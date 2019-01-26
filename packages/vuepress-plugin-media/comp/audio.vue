<template>
  <aplayer :audio="audio" :lrcType="3"/>
</template>

<script>
import Vue from 'vue';
import APlayer from '@moefe/vue-aplayer';

Vue.use(APlayer);

export default {
  props: ['data', 'param'],
  data() {
    return {}
  },
  computed: {
    audio() {
      if (!this.data) return []
      if (Array.isArray(this.data)) {
        return this.data.map(meta => this.wrapAudioMeta(meta))
      } else {
        return this.wrapAudioMeta(this.data)
      }
    }
  },
  methods: {
    wrapAudioMeta(meta) {
      return {
        name: 'Untitled Music',
        artist: 'Unknown Artist',
        url: '',
        cover: '',
        ...meta,
      }
    }
  }
};
</script>

<style lang="stylus">
/* Todo:
bind@lrcType
全部用字符串?

解析网易云等外链


解析实例
http://www.guqiankun.com/tools/music/
https://github.com/JixunMoe/netease-cloud-music-api

问题:
如果外链可变, 则惰性加载解析脚本
*/
</style>