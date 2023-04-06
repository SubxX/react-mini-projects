import { createModel } from '@rematch/core'
import type { RootModel } from '.'

type CartState = {
    items: any[]
    itemIds: string[]
}
const formatState = (items: any[]) => ({
    items,
    itemIds: items.map((itm) => itm.id)
})

export const cart = createModel<RootModel>()({
    state: {
        items: [],
        itemIds: []
    } as CartState,
    reducers: {
        init(_, payload: any[]) {
            return formatState(payload)
        },
        add(state, payload: any[]) {
            const newCart = [...state.items, { ...payload, quantity: 1 }]
            return formatState(newCart)
        },
        updateProductQuantity(state, { id, quantity }: { id: string; quantity: number }) {
            const newCart = state.items.map((item) => item.id !== id ? item : ({ ...item, quantity }))
            return formatState(newCart)
        },
        remove(state, productId: string) {
            const newCart = state.items.filter((prod) => prod.id !== productId)
            return formatState(newCart)
        },
    },
    // dispatch
    effects: () => ({

    }),
})
