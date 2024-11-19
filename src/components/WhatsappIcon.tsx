"use client";
import React, { useState, useEffect } from "react";
import Whatsapp from "../../public/svg/whatsapp";

const ChatWhatsapp = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 8000);

    const hideTooltip = setTimeout(() => {
      setShowTooltip(false);
    }, 18000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideTooltip);
    };
  }, []);

  return (
    <div className="fixed right-5 bottom-10 z-50">
      <button
        // onClick={openWhatsApp}
        className={`flex items-center justify-center transition duration-300 rounded-full shadow-lg w-14 h-14 focus:outline-none text-white bg-[#25D366]`}
      >
        <span className="sr-only">Chatea con nuestra IA!</span>

        <Whatsapp />
      </button>

      {showTooltip && (
        <div className="absolute bottom-2 left-[-270px] p-3 text-black bg-white rounded-lg shadow-lg w-[250px] text-center">
          Consulta todas tus dudas por aquí?
        </div>
      )}
    </div>
  );
};

export default ChatWhatsapp;
