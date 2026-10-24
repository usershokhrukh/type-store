"use client";

import {ModalContext} from "@/context/ModalContext";
import React, {useState} from "react";
const ModalProvider = ({children}: {children: React.ReactNode}) => {
  const [modal, setModal] = useState<boolean>(false);
  const DefaultForm = () => <form />;
  const [comp, setComp] = useState<React.ComponentType<any> | null>(DefaultForm);
  const [disable, setDisable] = useState<boolean>(false);
  return (
    <ModalContext.Provider
      value={{modal, setModal, comp, setComp, disable, setDisable}}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
