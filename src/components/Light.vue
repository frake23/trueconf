<template>
  <div class="light" v-bind:style="{
    opacity: active ? 1: 0.5,
    background: color
  }"/>
</template>

<script>
export default {
  name: "Light",
  props: {
    color: String,
    active: Boolean
  }
}
</script>

<style scoped>
.light {
  border-radius: 50%;
  width: 150px;
  height: 150px;
}
</style>