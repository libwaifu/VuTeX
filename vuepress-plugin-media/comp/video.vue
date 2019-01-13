<template>
  <d-player :options="options"/>
</template>

<script>
import Vue from 'vue';
import DPlayer from 'vue-dplayer';
import 'vue-dplayer/dist/vue-dplayer.css';

Vue.use(DPlayer);

export default {
  props: ['data', 'param'],
  data() {
    return {}
  },
  computed: {
    options() {
      return {
        ...(this.data || {}),
        contextmenu: [
          {
            text: 'custom1',
            link: 'https://github.com/DIYgod/DPlayer'
          },
          {
            text: 'custom2',
            click(player) {
              console.log(player);
            }
          }
        ],
        highlight: [
          {
            text: 'marker for 20s',
            time: 20
          },
          {
            text: 'marker for 2mins',
            time: 120
          }
        ]
      }
    }
  },
};
</script>
