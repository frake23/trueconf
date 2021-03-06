export default {
    name: "TrafficLightDataMixin",
    data: () => {
        return {
            lights: [
                {
                    type: 'red',
                    background: 'red',
                    delay: 10
                },
                {
                    type: 'yellow',
                    background: 'yellow',
                    delay: 3
                },
                {
                    type: 'green',
                    background: '#24e71e',
                    delay: 15
                },
            ]
        }
    },
    methods: {
        getNextLight(prev, active) {
            if (active === 'yellow')
                return prev === 'green' ? 'red' : 'green';
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
