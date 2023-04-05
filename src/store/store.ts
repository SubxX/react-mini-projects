import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from './models'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

const store = init({
    models,
})

export type Store = typeof store
export type AppDispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export default store