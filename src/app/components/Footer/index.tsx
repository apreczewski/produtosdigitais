import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gray-800 text-white py-8 w-full">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl mb-4">Entre em contato</h2>
        <p className="mb-4">Email: info@seusite.com</p>
        <div className="flex justify-center space-x-4">
          <a
            href="/privacy-policy"
            className="text-blue-300 hover:text-blue-100"
          >
            Política de Privacidade
          </a>
          <a
            href="/terms-of-service"
            className="text-blue-300 hover:text-blue-100"
          >
            Termos de Serviço
          </a>
        </div>
      </div>
    </div>
  );
};
