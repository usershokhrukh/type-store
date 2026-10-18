import { ModalContext } from '@/context/ModalContext'
import React, { useState } from 'react'

const ModalProvider = ({children} : {children: React.ReactNode}) => {
  const [modal, setModal] = useState<boolean>(false)
  return (
    <ModalContext.Provider value={{setModal, modal}}>ModalProvider</ModalContext.Provider>
  )
}

export default ModalProvider