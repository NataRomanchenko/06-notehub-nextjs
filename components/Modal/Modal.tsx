"use client"

import { useEffect } from "react";
import { createPortal } from "react-dom";
import css from "./Modal.module.css";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

 const modalRoot =
  typeof window !== "undefined"
    ? document.getElementById("modal-root")
    : null;

export default function Modal({ children, onClose }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);
if (!modalRoot) return null;
  return createPortal(
  <div
    className={css.overlay}
    onClick={(e) => {
      if (e.target === e.currentTarget) {
        onClose();
      }
    }}
  >
    <div className={css.modal}>
      {children}
    </div>
  </div>,
  modalRoot
);
}