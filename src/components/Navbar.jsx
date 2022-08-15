import React, { useState } from "react";
import {
  FiHome,
  FiPlusCircle,
  FiHexagon,
  FiPlusSquare,
  FiCheckCircle,
  FiRefreshCw,
  FiUploadCloud,
  FiLogOut,
} from "react-icons/fi";
import { Link } from "react-router-dom";
import Modal from "./Modal";

const Navbar = () => {
  const [isAddClass, setIsAddClass] = useState(false);
  const [isAddYear, setIsAddYear] = useState(false);
  const [isUpdateYear, setIsUpdateYear] = useState(false);
  const [isUploadInfo, setIsUploadInfo] = useState(false);
  return (
    <>
      <div className={"w-full"}>
        <div
          className={
            "w-10 md:w-52 h-screen bg-gradient-to-b from-cyan-300 to-sky-600 py-10 rounded-r-3xl"
          }
        >
          <div
            className={"w-full flex-col px-5 text-center gap-1 hidden md:block"}
          >
            <h2 className={"text-2xl font-semibold text-sky-800"}>DIHS</h2>
            <p className={"text-cyan-100 font-bold text-md"}>Management</p>
            <hr className={"mt-4"} />
          </div>
          <div className={"flex flex-col gap-10 md:px-5 md:py-10 px-2 py-14"}>
            <Link
              to="/management"
              className={
                "flex items-center gap-4 text-slate-50 hover:text-sky-800 duration-300 ease-in"
              }
            >
              <FiHome size={20} />
              <Link to="/management" className={"hidden md:block"}>
                Dashboard
              </Link>
            </Link>

            <button
              onClick={() => setIsAddClass(true)}
              className={
                "flex items-center gap-4 text-slate-50 hover:text-sky-800 duration-300 ease-in"
              }
            >
              <FiPlusCircle size={20} />
              <button
                onClick={() => setIsAddClass(true)}
                className={"hidden md:block"}
              >
                Add Class
              </button>
            </button>

            <button
              onClick={() => setIsAddYear(true)}
              className={
                "flex items-center gap-4 text-slate-50 hover:text-sky-800 duration-300 ease-in"
              }
            >
              <FiPlusSquare size={20} />
              <button
                onClick={() => setIsAddYear(true)}
                className={"hidden md:block"}
              >
                Add Acad Year
              </button>
            </button>

            <button
              onClick={() => setIsUpdateYear(true)}
              className={
                "flex items-center gap-4 text-slate-50 hover:text-sky-800 duration-300 ease-in"
              }
            >
              <FiCheckCircle size={20} />
              <button
                onClick={() => setIsUpdateYear(true)}
                className={"hidden md:block"}
              >
                Set Acad Year
              </button>
            </button>

            <Link
              to="/management"
              className={
                "flex items-center gap-4 text-slate-50 hover:text-sky-800 duration-300 ease-in"
              }
            >
              <FiRefreshCw size={20} />
              <Link to="/management" className={"hidden md:block"}>
                Pending Actions
              </Link>
            </Link>

            <button
              onClick={() => setIsUploadInfo(true)}
              className={
                "flex items-center gap-4 text-slate-50 hover:text-sky-800 duration-300 ease-in"
              }
            >
              <FiUploadCloud size={20} />
              <button
                onClick={() => setIsUploadInfo(true)}
                className={"hidden md:block"}
              >
                Upload Info
              </button>
            </button>

            <Link
              to="/management"
              className={
                "flex items-center gap-4 text-slate-50 hover:text-sky-800 duration-300 ease-in"
              }
            >
              <FiLogOut size={20} />
              <Link to="/management" className={"hidden md:block"}>
                Logout
              </Link>
            </Link>
          </div>
        </div>

        {/* All Modals */}
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

        <Modal open={isAddYear} close={() => setIsAddYear(false)}>
          <div className={"form"}>
            <div>
              <input
                className={
                  "w-full mt-3 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none ease-in-out duration-500 p-2 text-sm"
                }
                type="text"
                name="year"
                id="year"
                placeholder=" Add academic year"
              />

              <button
                className={
                  "bg-sky-300 mt-3 p-2 w-full font-bold rounded-sm hover:bg-sky-400 hover:text-white hover:shadow-lg ease-in duration-300"
                }
              >
                Add year
              </button>
            </div>
          </div>
        </Modal>

        <Modal open={isUploadInfo} close={() => setIsUploadInfo(false)}>
          <div className={"form"}>
            <div>
              <input
                className={
                  "w-full mt-3 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none ease-in-out duration-500 p-2 text-sm"
                }
                type="text"
                name="title"
                id="title"
                placeholder=" Enter title"
              />

              <textarea
                name="content"
                id="content"
                className={
                  "w-full mt-3 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none ease-in-out duration-500 p-2 text-sm"
                }
                placeholder=" Enter information"
              ></textarea>

              <input
                className={
                  "w-full mt-3 rounded-lg focus:ring-2 focus:ring-sky-400 outline-none ease-in-out duration-500 p-2 text-sm"
                }
                type="file"
                name="image"
                id="image"
              />

              <button
                className={
                  "bg-sky-300 mt-3 p-2 w-full font-bold rounded-sm hover:bg-sky-400 hover:text-white hover:shadow-lg ease-in duration-300"
                }
              >
                Upload Content
              </button>
            </div>
          </div>
        </Modal>
      </div>
    </>
  );
};

export default Navbar;
