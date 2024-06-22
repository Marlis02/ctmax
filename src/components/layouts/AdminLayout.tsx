import React, { PropsWithChildren } from 'react'

import styles from './layout.module.scss'

const AdminLayout = ({ children }: PropsWithChildren<unknown>) => {
  return <>{children}</>
}

export default AdminLayout
