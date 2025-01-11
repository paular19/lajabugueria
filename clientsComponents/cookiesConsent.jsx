// src/components/CookieBanner.js
"use client";

import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "false");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 container-cookies">
      <div className="bg-white rounded-lg p-6 max-w-lg w-full text-center shadow-lg">
        <h2 className="text-lg font-semibold mb-4">Este sitio utiliza cookies</h2>
        <p className="mb-6 text-gray-700">
          Usamos cookies para mejorar la experiencia del usuario. ¿Aceptas su uso?
        </p>
        <div className="flex justify-center gap-4 container-bot-coo">
          <button
            onClick={handleAccept}
            className="miBoton"
          >
            Aceptar
          </button>
          <button
            onClick={handleDecline}
            className="miBoton"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;
