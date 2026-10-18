import { createContext } from "react";
interface ModalType {
  modal: boolean,
  setModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const ModalContext = createContext<ModalType | null>(null)