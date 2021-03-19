<script>
export default {
  name: "TrafficLightMixin",
  data: () => {
    return {
      lights: [
        {
          type: 'green',
          background: '#24e71e',
          delay: 3
        },
        {
          type: 'yellow',
          background: 'yellow',
          delay: 3
        },
        {
          type: 'red',
          background: 'red',
          delay: 3
        }
      ]
    }
  },
  methods: {
    nextLightType(lightType) {
      return this.lights[(this.lights.findIndex(light => light.type === lightType) + 1) % this.lights.length].type;
    },
    getDelay(lightType) {
      return this.lights.find((light) => light.type === lightType).delay;
    }
  }
}
</script>
