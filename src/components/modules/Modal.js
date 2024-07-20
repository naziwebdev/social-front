"use client";
import * as React from "react";
import { createPortal } from "react-dom";

export default function Modal({ children, onClose }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  const closeModal = () => {
    onClose();
  };
  return mounted
    ? createPortal(
        <div className="w-full h-dvh fixed top-0 left-0 z-50 bg-black/20 flex justify-center items-center ">
          <div className="w-[70%] h-auto p-12 bg-white rounded-lg relative ">
            <span
              onClick={closeModal}
              className="absolute top-5 left-5 cursor-pointer text-xl"
            >
              ✕
            </span>
            <div className="mt-7">{children}</div>
          </div>
        </div>,
        document.body
      )
    : null;
}
