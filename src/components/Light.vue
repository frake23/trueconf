<template>
  <div class="light" :style="{
    opacity: active && show ? 1: 0.5,
    background: color
  }"/>
</template>

<script>
export default {
  name: "Light",
  props: {
    color: String,
    active: Boolean,
    flashing: Boolean
  },
  data: () => {
    return {
      show: true
    }
  },
}
</script>

<style scoped>
.light {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
</style>