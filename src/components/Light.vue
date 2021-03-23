<template>
    <div :class="`light${flashing ? ' flashing' : ''}`" :style="{
      opacity: active && show ? 1: 0.5,
      background: color
    }"/>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "Light",
  props: {
    color: String,
    active: Boolean,
  },
  data: () => {
    return {
      show: true
    }
  },
  computed: {
    ...mapState('trafficLight', ['timer']),
    flashing() {
      return this.active && this.timer <= 3;
    }
  }
}
</script>

<style scoped>
.light {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}

.flashing {
  animation: .75s blinker infinite;
}

@keyframes blinker {
  from { opacity: 1.0; }
  to { opacity: 0.25; }
}
</style>