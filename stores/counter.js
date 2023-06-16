import {defineStore} from "pinia";
export const useCounterStore = defineStore("counter", {
    state: () => ({
        counters: [
            {
                name: 'counter 1'
            },
            {
                name: 'counter 1'
            },
            {
                name: 'counter 1'
            },
            {
                name: 'counter 1'
            }
        ],
        mainCount: 0,
    }),
    getters: {
        doubleCount: (state) => state.counters
    },
    actions: {
        countIncrement() {
            this.mainCount++
        }
    }
})
