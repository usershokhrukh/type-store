"use client"

import { ModalContext} from '@/context/ModalContext'
import React, { useState } from 'react'
const ModalProvider = ({children} : {children: React.ReactNode}) => {
  const [modal, setModal] = useState<boolean>(false)
  const [comp, setComp] = useState<React.ReactElement>(<form/>)
  return (
    <ModalContext.Provider value={{modal, setModal, comp, setComp}}>{children}</ModalContext.Provider>
  )
}

export default ModalProvider