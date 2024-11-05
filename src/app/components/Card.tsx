import React from "react";
import { QRCodeSVG } from "qrcode.react";

const Card: React.FC = () => {
  const yesiMolinaDev = "https://yesimolina.dev";
  return (
    <section
      className={`bg-white p-4 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-lg min-w-48 max-w-64`}
      style={{ fontFamily: "var(--font-outfit-regular)" }}
    >
      <div className="flex justify-center items-center w-full bg-[radial-gradient(ellipse_at_top_left,_rgba(96,165,250,1),_transparent),_radial-gradient(ellipse_at_bottom_right,_rgba(96,165,250,1),_transparent)] bg-blue-600 rounded-lg text-black grid gap-4 rounded-xl border p-6 z-9 min-h-48">
        <QRCodeSVG
          value={yesiMolinaDev}
          title={"Subscribe to Yesi Molina's blog"}
          size={128}
          bgColor={"#3685FE"}
          fgColor={"#ffffff"}
          level={"L"}
          imageSettings={{
            src: "/favicon.ico",
            x: undefined,
            y: undefined,
            height: 32,
            width: 32,
            opacity: 1,
            excavate: true,
          }}
        />
      </div>
      <h1 className="text-base font-bold text-center mt-4">
        If you want to read other blog entries, visit my website!
      </h1>
      <p className="text-sm text-center mt-2 text-gray-400 p-4">
        There you can also see my work experience and subscribe to my newsletter
        so you have updates right in your inbox!
      </p>
    </section>
  );
};

export default Card;
