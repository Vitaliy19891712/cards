import { isRejectedWithValue } from '@reduxjs/toolkit'
import type { Middleware } from '@reduxjs/toolkit'
import { toast } from 'react-toastify'

/**
 * Log a warning and show a toast!
 */
export const rtkQueryErrorLogger: Middleware = () => next => action => {
  if (isRejectedWithValue(action)) {
    action.payload.data.message !== 'Unauthorized' && toast.error(action.payload.data.message)
  }

  return next(action)
}
