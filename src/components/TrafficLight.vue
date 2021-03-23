<template>
  <div class="d-flex flex-column traffic-light py-5 px-4">
    <div
        v-for="light in lights"
        :key="light.id"
        class="flex-grow-1 my-2 mx-3"
    >
      <Light
          :active="active === light.type"
          :color="light.background"
      />
    </div>

  </div>
</template>

<script>
import {mapState, mapMutations} from 'vuex';

import Light from "@/components/Light";
import TrafficLightDataMixin from "@/mixins/TrafficLightDataMixin.js";
import LocalStorageMixin from "@/mixins/LocalStorageMixin.js";

export default {
  name: "TrafficLight",
  mixins: [TrafficLightDataMixin, LocalStorageMixin],
  components: {
    Light
  },
  computed: {
    ...mapState('trafficLight', ['active', 'timer', 'next'])
  },
  methods: {
    ...mapMutations('trafficLight', ['decrementTimer', 'setNext', 'setTimer', 'setActive'])
  },
  mounted() {
    const stateFunc = () => ({active: this.active, next: this.next, timer: this.timer});
    this.saveOnReload(stateFunc);
  },
  watch: {
    timer: function(now) {
      if (!now) {
        this.setActive(this.next);
        return;
      }
      setTimeout(() => this.decrementTimer(), 1000)
    },
    active: function(now, prev) {
      let delay; let next;

      if (this.storageState && this.storageState.active === this.active) {
        delay = this.storageState.timer;
        next = this.storageState.next;
        this.clearStorageState();
      } else {
        delay = this.delays[now];
        next = this.getNextLight(prev, now);
        if (this.storageState) this.clearStorageState();
      }
      this.setTimer(delay); this.setNext(next);
    }
  }
}
</script>

<style scoped>
.traffic-light {
  background: #404040;
  border-radius: 50px;
}
</style>