

<script>
import BackToTop from "./components/BackToTop.vue";
import Badge from "./components/Badge.vue";
import Copyright from "./components/Copyright.vue";

export default ({ Vue }) => {
  Vue.component("BackToTop", BackToTop);
  Vue.component("Copyright", Copyright);
  Vue.component("Badge", Badge);
};
</script>

