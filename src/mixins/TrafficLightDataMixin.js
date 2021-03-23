export default {
    name: "TrafficLightDataMixin",
    data: () => {
        return {
            lights: [
                {
                    type: 'green',
                    background: '#24e71e',
                    delay: 15
                },
                {
                    type: 'yellow',
                    background: 'yellow',
                    delay: 3
                },
                {
                    type: 'red',
                    background: 'red',
                    delay: 10
                }
            ]
        }
    },
    methods: {
        getNextLight(prev, active) {
            if (active === 'yellow')
                return prev === 'red' ? 'green' : 'red';
            else
                return 'yellow'
        }
    },
    computed: {
        delays: function () {
            const delays = {}
            this.lights.forEach(light => delays[light.type] = light.delay);
            return delays;
        }
    }
}
