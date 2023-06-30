// Componente: CourseDetailsSection.jsx

import React from "react";

export const CourseDetailsSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-8 text-center text-gray-800">
          Detalhes do Curso
        </h2>
        <div className="space-y-8">
          <div className="border p-4 rounded-3xl shadow-sm bg-white">
            <h3 className="text-2xl mb-2 text-gray-800">
              Módulo 1: Introdução à Ansiedade
            </h3>
            <p className="text-gray-600">
              Neste módulo, você aprenderá o que é a ansiedade e como ela afeta
              a mente e o corpo.
            </p>
          </div>
          <div className="border p-4 rounded-md shadow-sm bg-white">
            <h3 className="text-2xl mb-2 text-gray-800">
              Módulo 2: Estratégias de Gerenciamento da Ansiedade
            </h3>
            <p className="text-gray-600">
              Neste módulo, você aprenderá várias estratégias eficazes para
              gerenciar a ansiedade.
            </p>
          </div>
          <div className="border p-4 rounded-md shadow-sm bg-white">
            <h3 className="text-2xl mb-2 text-gray-800">
              Módulo 3: Mantendo o Progresso
            </h3>
            <p className="text-gray-600">
              Neste módulo, você aprenderá como manter o progresso que fez e
              como lidar com recaídas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
