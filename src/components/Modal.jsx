import React from "react";
import { FiXOctagon } from "react-icons/fi";

function Modal({ children, open, close }) {
  if (!open) return null;
  return (
    <div className="bg-cyan-200 flex justify-center p-10 custom__modal mx-auto to-transparent shadow-md rounded-3xl border-2 border-white">
      <div className="flex gap-10 items-start">
        <div className="p-3 text-right border-l-2 border-slate-400 md:w-96 w-80 font-bold text-black">
          {children}
        </div>
        <div>
          <FiXOctagon
            onClick={close}
            className="text-red-400 font-black cursor-pointer hover:text-black duration-200 ease-in"
            size={22}
          />
        </div>
      </div>
    </div>
  );
}

// Use this snippet to create a modal

{/* <Modal open={isOpen} close={() => setIsOpen(false)}>
  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellendus saepe
  nostrum ducimus magnam ratione quisquam minus quia excepturi sapiente nisi,
  fuga a ipsum ex eveniet aspernatur, mollitia perferendis. Unde, magni.
</Modal> */}

export default Modal;
