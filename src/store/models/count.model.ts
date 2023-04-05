import { createModel } from '@rematch/core'
import type { RootModel } from '.'

export const count = createModel<RootModel>()({
    state: 0,
    reducers: {
        increment(state, payload?: number) {
            return payload ? state + payload : ++state
        },
    },
    effects: (dispatch) => ({
        incrementAsync(payload: number, state) {
            dispatch.count.increment(payload)
        },
    }),
})