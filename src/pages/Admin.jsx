import React, { useState } from "react";
import { FiBookOpen, FiUsers } from "react-icons/fi";
import Classes from "../components/Classes.jsx";
import Navbar from "../components/Navbar.jsx";
import Teachers from "../components/Teachers.jsx";
import Modal from '../components/Modal';

const Admin = () => {
  return (
    <>
      <div className={"w-full flex"}>
        <Navbar />

        <div
          className={"w-[1500%] md:w-[513%] content h-screen rounded-l-2xl p-2"}
        >
          <div className="w-full rounded p-2 bg-sky-400 flex justify-end">
            <button className="mr-4 hover:text-sky-900 text-white duration-300 ease-in">
              | Dashboard
            </button>
          </div>

          {/* Main Information */}

          <div className="w-full mt-6">
            <h1 className="font-black uppercase text-1xl mb-4">
              Proprietor Dashboard
            </h1>{" "}
            <hr />
            {/* STart of totral number */}
            <div className="w-full grid grid-cols-3 mt-10 gap-3">
              <div className="bg-sky-300 p-6 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="font-bold text-3xl">0</h1>
                    <h2 className="font-bold">Students</h2>
                  </div>

                  <div>
                    <FiUsers className="hidden md:block" size={40} />
                  </div>
                </div>
              </div>

              <div className="bg-sky-300 p-6 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="font-bold text-3xl">0</h1>
                    <h2 className="font-bold">Teachers</h2>
                  </div>

                  <div>
                    <FiUsers className="hidden md:block" size={40} />
                  </div>
                </div>
              </div>

              <div className="bg-sky-300 p-6 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h1 className="font-bold text-3xl text-sky-100">2022</h1>
                    <h2 className="font-bold">Academic Year</h2>
                  </div>

                  <div>
                    <FiBookOpen className="hidden md:block" size={40} />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End of total number */}
            <h1 className="font-black uppercase text-2xl mt-10 mb-2">
              Teachers
            </h1>
            <hr />
            <div className="w-full py-5 px-3">
              <div className="grid grid-cols-1 md:grid md:grid-cols-3 items-center gap-3">
                <Teachers />
                <Teachers />
                <Teachers />
                <Teachers />
                <Teachers />
                <Teachers />
              </div>
            </div>{" "}
            {/* End of teachers */}
            <h1 className="font-black uppercase text-2xl mt-10 mb-2">
              Classes
            </h1>
            <hr />
            <div className="w-full py-5 px-3">
              <div className="grid grid-cols-1 md:grid md:grid-cols-3 items-center gap-3">
                <Classes />
                <Classes />
                <Classes />
              </div>
            </div>{" "}
            {/* End of classes */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
