import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '../services'
import { rtkQueryErrorLogger } from './errorCatchingMiddleware'

export const store = configureStore({
  reducer: { [baseApi.reducerPath]: baseApi.reducer },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware).concat(rtkQueryErrorLogger),
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
