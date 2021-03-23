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
  created() {
    if (!['green', 'yellow', 'red'].includes(this.lightType))
      this.$router.push('/green')
  },
  mounted() {
    this.setActive(this.lightType);
  },
  methods: {
    ...mapMutations('trafficLight', ['setActive'])
  },
  computed: {
    ...mapState('trafficLight', ['timer', 'active']),
    lightType(){
      return this.$route.params.lightType
    }
  },
  watch: {
    active: function(now) {
      if (this.lightType !== now) this.$router.push(`/${now}`);
    }
  }
}
</script>

<style scoped>
.timer {
  font-size: 32px;
}
</style>