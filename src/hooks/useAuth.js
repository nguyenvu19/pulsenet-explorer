import { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import actions from 'redux/auth/actions'

const { login, logout } = actions

const useAuth = () => {
  const dispatch = useDispatch()
  const login = useCallback((params) => {
    dispatch(login(params))
  }, [])

  const logout = useCallback((params) => {
    dispatch(login(params))
  }, [])

  const register = useCallback((params) => {
    dispatch(login(params))
  }, [])
  return {
    login,
    logout,
    register,
  }
}

export default useAuth
