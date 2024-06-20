import React, { useEffect } from 'react'
import './Toast.scss'

const Toast = ({ message, type, duration, onClose }: any) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration)
    return () => clearTimeout(timer)
  }, [duration, onClose])

  return <div className={`toast ${type}`}>{message}</div>
}

export default Toast
