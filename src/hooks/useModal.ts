import { useState } from 'react';

export type TModalState = {
  isOpen: boolean;
  onCancel?: () => void;
  onSubmit?: (payload: void) => void;
};
export type TSubmitPayload = void;

export const useModal = <TSubmitPayload = void, TAdditionModalState = unknown>(
  getOnSubmitHandler?: (close: () => void) => (payload: TSubmitPayload) => void,
) => {
  const closedModalState = {
    isOpen: false,
  };

  const [modalState, setModalState] = useState<TModalState & any>(closedModalState);

  const closeModal = () => {
    setModalState(closedModalState);
  };

  const onSubmitHandler = getOnSubmitHandler ? getOnSubmitHandler(closeModal) : closeModal;

  const onCancelHandler = () => {
    closeModal();
  };

  const openModal = (additionModalState: TAdditionModalState) => {
    setModalState({
      isOpen: true,
      ...additionModalState,
    });
  };

  return {
    modalState: {
      ...modalState,
      onSubmit: onSubmitHandler,
      onCancel: onCancelHandler,
    },
    openModal,
    closeModal,
  };
};
