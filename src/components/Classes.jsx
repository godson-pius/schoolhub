import React from "react";

function Classes() {
  return (
    <>
      <div className="bg-gradient-to-br to-sky-300 from-cyan-200 p-4 rounded-md shadow-md w-full">
          <div>
            <h2 className="font-bold text-2xl">Basic 4</h2>
            <h6 className="text-sm">John Nwafor</h6>

            <div className="flex items-center gap-1 mt-4">
              <button className="bg-sky-600 text-sm p-1 rounded text-white">
                Edit class
              </button>
              <button className="bg-red-600 text-sm p-1 rounded text-white">
                Remove
              </button>
            </div>
          </div>
        </div>
    </>
  );
}

export default Classes;
