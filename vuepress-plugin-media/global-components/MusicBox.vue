<template>
  <!-- prettier-ignore -->
  <div id="app">
    <aplayer :audio="audio" :lrcType="3" fixed />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      audio: {
        name: 'The Party We Have Never Seen',
        artist: 'Nana Takahashi',
        url: 'https://cdn.moefe.org/music/mp3/thepartywehaveneverseen.mp3',
        cover: 'https://p1.music.126.net/IwclpJu4gaqhSZrKunEFWg==/3297435379408525.jpg?param=300y300', // prettier-ignore
        lrc: 'https://cdn.moefe.org/music/lrc/thepartywehaveneverseen.lrc',
      },
    };
  },
};
</script>
