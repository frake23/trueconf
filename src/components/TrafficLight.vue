<template>
  <div class="d-flex flex-column traffic-light py-5 px-4">
    <div
        v-for="light in lights"
        v-bind:key="light.id"
        class="flex-grow-1 my-2 mx-3"
    >
      <Light
          v-bind:active="active === light.type"
          v-bind:color="light.background"
      />
    </div>

  </div>
</template>

<script>
import Light from "@/components/Light";
import TrafficLightMixin from "@/mixins/TrafficLightMixin";

export default {
  name: "TrafficLight",
  mixins: [TrafficLightMixin],
  props: {
    active: String
  },
  components: {
    Light
  }
}
</script>

<style scoped>
.traffic-light {
  background: #404040;
  border-radius: 50px;
}
</style>