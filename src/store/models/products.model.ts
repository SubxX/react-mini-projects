import { createModel } from '@rematch/core'
import type { RootModel } from '.'
import axiosInstance from '@/utils/axios.utils'


export const products = createModel<RootModel>()({
    state: [] as any[],
    reducers: {
        set(_, payload: any[]) {
            return payload
        },
    },
    // dispatch
    effects: () => ({
        async loadProducts(controller: AbortController) {
            const { data } = await axiosInstance.get('/products', {
                signal: controller.signal
            })
            this.set(data)
        },
    }),
})

