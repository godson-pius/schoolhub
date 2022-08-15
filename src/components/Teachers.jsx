import React from "react";

function Teachers() {
  return (
    <>
      <div className="bg-gradient-to-br to-sky-300 from-cyan-200 p-4 rounded shadow-md w-full">
        <div className="flex items-center w-full justify-between">
          <div>
            <span className="flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-sky-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </span>
            <h2 className="font-bold text-2xl">John Nwafor</h2>
            <p className="text-sm">+234 8726373633</p>
            <a href="mailto:johndoe@gmail.com" className="text-sm text-sky-600">
              johndoe@gmail.com
            </a>

            <div className="flex items-center gap-1 mt-4">
              <button className="bg-sky-600 text-sm p-1 rounded text-white">
                Change Status
              </button>
              <button className="bg-red-600 text-sm p-1 rounded text-white">
                Delete
              </button>
            </div>
          </div>

          <div>
            <div className="w-20 h-20 bg-sky-400 rounded-full border-2 border-slate-50 shadow"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Teachers;
