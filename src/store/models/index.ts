// @filename: models.ts
import { Models } from "@rematch/core"
import { products } from "./products.model"

export interface RootModel extends Models<RootModel> {
    products: typeof products
}

export const models: RootModel = { products }