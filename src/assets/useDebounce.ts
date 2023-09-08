import { useEffect, useState } from 'react'

/**
 * Хук для задержки обновления значения на определенное время.
 *
 * @param { T } value - Значение, которое нужно задержать.
 * @param {number} delay - Задержка в миллисекундах.
 * @returns {string | number} - Задержанное значение.
 */

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)
    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])
  return debouncedValue
}
