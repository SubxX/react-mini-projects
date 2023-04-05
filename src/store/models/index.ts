// @filename: models.ts
import { Models } from "@rematch/core"
import { count } from "./count.model"

export interface RootModel extends Models<RootModel> {
    count: typeof count
}

export const models: RootModel = { count }