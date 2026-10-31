import { CloseButton, Dialog, Portal } from "@chakra-ui/react";
import { useModalStore } from "@/Zustand/useModalStore";
import styles from "./Modal.module.css";

const GlobalModal = () => {
  const isOpen = useModalStore((state) => state.isOpen);
  const onClose = useModalStore((state) => state.onClose);
  const title = useModalStore((state) => state.title);
  const children = useModalStore((state) => state.children);

  return (
    <Dialog.Root
      open={isOpen}
      onOpenChange={(details) => !details.open && onClose()}
      placement="center"
      size="lg"
      scrollBehavior="inside"
    >
      <Portal>
        <Dialog.Backdrop className={styles.backdrop} />

        <Dialog.Positioner className={styles.positioner}>
          <Dialog.Content className={styles.content}>
            <Dialog.Header className={styles.header}>
              <Dialog.Title className={styles.title}>
                {title || "Aviso"}
              </Dialog.Title>

              <Dialog.CloseTrigger asChild>
                <CloseButton
                  size="sm"
                  className={styles.closeButton}
                  aria-label="Fechar modal"
                />
              </Dialog.CloseTrigger>
            </Dialog.Header>

            <Dialog.Body className={styles.body}>
              {children}
            </Dialog.Body>
          </Dialog.Content>
        </Dialog.Positioner>
      </Portal>
    </Dialog.Root>
  );
};

export default GlobalModal;