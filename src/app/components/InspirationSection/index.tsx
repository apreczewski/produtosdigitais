import React from "react";

export const InspirationSection: React.FC = () => {
  return (
    <div
      className="bg-cover bg-center h-screen flex items-center justify-center"
      style={{
        backgroundImage:
          "url(https://images.pexels.com/photos/3184331/pexels-photo-3184331.jpeg)",
      }}
    >
      <div className="text-center">
        <h2 className="text-white text-4xl mb-4">Inspirado pelo Dribbble</h2>
        <p className="text-white text-xl mb-8">
          Nós buscamos inspiração de designers talentosos do Dribbble para criar
          um curso e ebook visualmente atraentes e eficazes.
        </p>
        <button className="px-8 py-2 bg-blue-500 text-white text-xl font-bold rounded-full">
          Veja Mais
        </button>
      </div>
    </div>
  );
};
