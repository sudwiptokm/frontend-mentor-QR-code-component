import React from "react";
import Image from "next/image";

export default function Card() {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="flex justify-center items-center max-w-[350px] bg-white rounded-2xl p-4 flex-col">
        {/* QR Code */}
        <div>
          <Image
            src={require(`../public/qr-code.png`)}
            alt="QR Code"
            className="rounded-xl"
          ></Image>
        </div>

        {/* Texts */}
        <div className="mb-6">
          <p className="text-center text-gray-900 font-bold text-2xl mt-8">
            Improve your front-end skills by building projects
          </p>
          <p className="text-center text-gray-500 text-lg mt-4">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </p>
        </div>
      </div>
    </div>
  );
}
