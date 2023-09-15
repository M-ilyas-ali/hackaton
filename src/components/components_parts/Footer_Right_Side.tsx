import React from "react";

export default function Right() {
  const Copy_Right = (
    <>
      <div className="bg-gray-400 max-w-[1536px] h-[2px]"></div>
      <section className="flex flex-col md:flex-row bg-gray-300 py-8 space-y-4 md:space-y-0 justify-center items-center md:justify-evenly ">
        <div className="basis1/3">
          <h5>Copyrights @ 2023 Dine Mart</h5>
        </div>
        <div className="basis1/3">
          <h5>Designed by:<span className="font-bold hover:text-red-600">Panaverse.Com</span></h5>
        </div>
        <div className="basis1/3">
          <h5>Copy by:<span className="font-bold">M-Ilyas-Ali</span></h5>
        </div>
      </section>
    </>
  );
  return Copy_Right;
}
