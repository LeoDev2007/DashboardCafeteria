import { create } from 'zustand';
import type { ReactNode } from 'react';


interface ModalState {
  isOpen: boolean;
  title: string;
  children: ReactNode | null;
  onOpen: (title: string, children: ReactNode) => void;
  onClose: () => void;
}


export const useModalStore = create<ModalState>((set) => ({
  isOpen: false,
  title: '',
  children: null,
  
  onOpen: (title, children) => set({ isOpen: true, title, children }),
  
  onClose: () => set({ isOpen: false, title: '', children: null }),
}));