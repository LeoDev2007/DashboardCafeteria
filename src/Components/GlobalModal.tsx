import { Button, CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { useModalStore } from "@/Zustand/useModalStore";

const GlobalModal = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const onClose = useModalStore((state) => state.onClose);
  const title = useModalStore((state) => state.title);
  const children = useModalStore((state) => state.children);

  return (
    
    <Dialog.Root open={isOpen} onOpenChange={(details) => !details.open && onClose()} placement="center" size="lg">
      <Portal>
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content padding="2rem">
            
            <Dialog.Header>
              <Dialog.Title>{title || "Aviso"}</Dialog.Title>
            </Dialog.Header>
            
            <Dialog.Body>
              {children}
            </Dialog.Body>
            <Dialog.CloseTrigger asChild>
              <CloseButton size="md" onClick={onClose} color="#2E5697" />
            </Dialog.CloseTrigger>
            
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default GlobalModal;
