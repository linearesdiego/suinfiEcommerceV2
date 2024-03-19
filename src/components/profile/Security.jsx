import React from "react";

export const Security = () => {
  return (
    <div className="pl-4 w-11/12 ml-10 mr-4 h-5/6">
      <div className="bg-white border shadow-lg p-4 rounded-xl mt-8 mr-4 h-full">
        <div className="ml-8">
          <div className="p-4 mt-2 font-bold text-3xl">
            <h4>Seguridad de tu cuenta</h4>
          </div>
          <div className=" py-0 px-4 ">
            <h2 className="font-bold py-2 px-0 ">Mail</h2>
            <span>Suinfigmail.com</span>
            <h2 className="font-bold py-2 px-0 mt-4">Clave</h2>
            <span className="mb-0">***********</span>
          </div>
        </div>
      </div>
    </div>
  );
};
