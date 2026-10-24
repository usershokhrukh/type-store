"use client"

import { createContext, useContext } from "react";
export interface ModalType {
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>,
  comp: React.ComponentType<any> | null,
  setComp: React.Dispatch<React.SetStateAction<React.ComponentType<any> | null | unknown>>
  disable: boolean,
  setDisable: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalContext = createContext<ModalType | null>(null)

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error()
  }
  return context;
};