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
            const newCart = [...state.items, { ...payload, qty: 1 }]
            return formatState(newCart)
        },
        updateProductQuantity(state, { id, qty }: { id: string; qty: number }) {
            const newCart = state.items.map((item) => item.id !== id ? item : ({ ...item, qty }))
            return formatState(newCart)
        },
        remove(state, productId: string) {
            const newCart = state.items.filter((prod) => prod.id !== productId)
            return formatState(newCart)
        },
    },
    selectors: (slice) => ({
        total() {
            return slice((cart) => cart.items.reduce((acc, product) => {
                acc += product.qty * product.price;
                return acc;
            }, 0) as number);
        },
    }),
    // dispatch
    effects: () => ({

    }),
})

