import React from 'react'
import Modal from './Modal';

function Mastermodel() {
  return (
    <>
        <Modal open={isAddClass} close={() => setIsAddClass(false)}>
          <div className={"form"}>
            <div>
              <input
                className={
                  "w-full mt-3 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none ease-in-out duration-500 p-2 text-sm"
                }
                type="text"
                name="class"
                id="class"
                placeholder=" Enter class"
              />

              <button
                className={
                  "bg-sky-300 mt-3 p-2 w-full font-bold rounded-sm hover:bg-sky-400 hover:text-white hover:shadow-lg ease-in duration-300"
                }
              >
                Insert Class
              </button>
            </div>
          </div>
        </Modal>

        <Modal open={isUpdateYear} close={() => setIsUpdateYear(false)}>
          <div className={"form"}>
            <div>
              <input
                className={
                  "w-full mt-3 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none ease-in-out duration-500 p-2 text-sm"
                }
                type="text"
                name="year"
                id="year"
                placeholder=" Enter current year"
              />

              <button
                className={
                  "bg-sky-300 mt-3 p-2 w-full font-bold rounded-sm hover:bg-sky-400 hover:text-white hover:shadow-lg ease-in duration-300"
                }
              >
                Update year
              </button>
            </div>
          </div>
        </Modal>
    </>
  )
}

export default Mastermodel