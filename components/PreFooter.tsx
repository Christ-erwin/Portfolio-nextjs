import Link from "next/link";
import React from "react";

export default function PreFooter() {
  return (
    <div className="w-full h-[25vh] md:h-[50vh] flex flex-col justify-center items-center gap-6 px-[5%]">
      <div>
        <p className="text-black font-semibold text-center text-2xl md:text-4xl">
          Do you have a project idea or <br />
          need a reliable freelancer? Let&apos;s talk!
        </p>
      </div>
      <Link href={"/contact"}>
      <div
        className="w-fit h-fit px-10 py-3 flex flex-col justify-center 
        items-center rounded-2xl  bg-gradient-to-r from-[#FD23E3] via-[#8021E8] to-[#0619EA]"
       >
        <p className="text-white font-semibold">Contact-me</p>
      </div>
      </Link>
    </div>
  );
}
