import React from "react";

// import { Container } from './styles';

export const HeroSection: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3560044/pexels-photo-3560044.jpeg)",
      }}
    >
      <div className="text-center">
        <h1 className="text-white text-6xl mb-4">Conquiste a Ansiedade</h1>
        <p className="text-white text-xl mb-8">
          Descubra estratégias eficazes para gerenciar a ansiedade com nosso
          curso e ebook.
        </p>
        <button className="px-8 py-2 bg-blue-500 text-white text-xl font-bold rounded-full">
          Saiba Mais
        </button>
      </div>
    </div>
  );
};
