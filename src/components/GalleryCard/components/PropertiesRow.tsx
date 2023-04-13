import React, { PropsWithChildren } from 'react'
import s from './PropertiesRow.module.scss'

interface PropertiesRowProps {}

const PropertiesRow: React.FC<PropsWithChildren<PropertiesRowProps>> = ({children})  => {
  return (
    <div className={s.propertiesRow}>
        {children}
    </div>
  )
}

export default PropertiesRow