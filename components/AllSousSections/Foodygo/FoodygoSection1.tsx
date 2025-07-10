import React from "react";

export default function FoodygoSection1() {
  return (
    <div className="w-full h-max-fit flex justify-center items-center px-[5%] shadow-lg">
      <div
        className="w-full max-w-[2028px] h-[80vh]
       bg-cover bg-center flex justify-start items-end"
           style={{
               backgroundImage:
                 "url('https://res.cloudinary.com/docanichi/image/upload/v1752175190/coverFoodygoBg_khronn.png')",
           }}>
        <div className="mb-[3%] ml-[3%]  ">
          <div>
            <div className="mb-[10%]">
              <p
                className="text-white text-4xl 2xl:text-7xl font-bold"
              >
                FoodyGo{" "}
              </p>
            </div>
            <div className="mb-7">
              <p className="text-white text-lg 2xl:text-2xl font-semibold">
                Creation of a smart restaurant app <br/>for managing menus, orders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
