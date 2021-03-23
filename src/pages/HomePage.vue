<template>
  <div class="min-vh-100 w-100 d-flex flex-column justify-content-center align-items-center">
    <span class="timer">{{timer}}c</span>
    <TrafficLight
        :active="$route.params.lightType"

    />

  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

import TrafficLight from "@/components/TrafficLight";

export default {
  name: "HomePage",
  components: { TrafficLight },
  mounted() {
    this.setActive(this.$route.params.lightType);
  },
  methods: {
    ...mapMutations('trafficLight', ['setActive'])
  },
  computed: {
    ...mapState('trafficLight', ['timer'])
  }
}
</script>

<style scoped>
.timer {
  font-size: 32px;
}
</style>