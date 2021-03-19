<template>
  <div class="min-vh-100 w-100 d-flex justify-content-center align-items-center">
    <TrafficLight v-bind:active="$route.params.color"/>

  </div>
</template>

<script>
import TrafficLight from "@/components/TrafficLight";
import TrafficLightMixin from "@/mixins/TrafficLightMixin";

export default {
  name: "HomePage",
  mixins: [TrafficLightMixin],
  components: { TrafficLight },
  methods: {
    setDelays() {
      const delay = this.getDelay(this.$route.params.color);
      setTimeout(() => this.$router.push(this.nextLightType(this.$route.params.color)), delay * 1000);
    }
  },
  updated() {
    this.setDelays();
  },
  mounted() {
    this.setDelays();
  }
}
</script>

<style scoped>

</style>