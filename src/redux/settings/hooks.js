import { useCallback, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

export function useSettings() {
  const { settings } = useSelector((state) => state.Settings)

  return { settings }
}
