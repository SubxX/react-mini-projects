import { createModel } from '@rematch/core'
import type { RootModel } from '.'
import axios from 'axios'
import { URL, PAGE_SIZE } from '../../constants/ecommerce.constatnts'


type ProductsState = {
    total: number
    items: any[]
}

export const products = createModel<RootModel>()({
    state: {
        total: 0,
        items: []
    } as ProductsState,
    reducers: {
        set(_, payload: ProductsState) {
            return payload
        },
    },
    // dispatch
    effects: () => ({
        async loadProducts({ controller, page }: { controller: AbortController; page: number }) {
            const skip = (page - 1) * PAGE_SIZE;
            const range = page * PAGE_SIZE;

            const { data } = await axios.get(URL, {
                signal: controller.signal,
                params: {
                    skip,
                    range
                }
            })
            this.set({ items: data?.products ?? [], total: data?.total ?? 0 })
        },
    }),
})

