import { Models } from "@rematch/core"
import { products } from "./products.model"
import { cart } from "./cart.model"

export interface RootModel extends Models<RootModel> {
    products: typeof products
    cart: typeof cart
}

export const models: RootModel = { products, cart }