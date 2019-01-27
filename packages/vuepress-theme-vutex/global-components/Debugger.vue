<script>
export default {
  mounted() {
    check();
  },
  methods: {
    check() {
      console.log('Site Info:');
      console.log($site);
      console.log('Page Info:');
      console.log($page);
    }
  }
};
</script>
