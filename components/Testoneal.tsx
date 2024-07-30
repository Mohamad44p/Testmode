/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Testoneal() {
  return (
    <div
      data-color="white"
      className="para section w-full h-screen flex justify-center items-center"
    >
      <div className="paratext relative flex justify-center items-center flex-col border-[2px] border-black w-[65%] py-[2rem] px-[2rem]">
        <h3 className="info text-center text-l font-semibold mt-10 px-20">
          Working with Significo and their recommendation service has been a
          game-changer for our occupational prevention efforts. Our customers
          are extremely satisfied with the tool's impressive technical
          capabilities and data-driven approach. But what truly sets it apart is
          the intuitive and modern user experience it offers, making it a breeze
          for our clients to navigate. By leveraging this service, our customers
          have successfully tackled presenteeism and absenteeism.
        </h3>
        <div className="img w-[6rem] h-[6rem] rounded-full mt-[10rem] overflow-hidden">
          <img
            className="object-cover w-full h-full"
            src="https://cdn.prod.website-files.com/659dbdfd5a080be8d3483190/659dbdfd5a080be8d3483253_EmekAltun.jpg"
            alt=""
          />
        </div>
        <h1 className="mt-[3rem]">Emek Altun</h1>
      </div>
    </div>
  );
}
