import React from 'react';

export const BenefitsSection = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-8 text-center text-gray-800">Benefícios do Curso</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="text-center">
              <i className="fas fa-brain text-6xl mb-4 text-blue-500"></i>
              <h3 className="text-2xl mb-4 text-gray-800">Melhore a Saúde Mental</h3>
              <p className="text-gray-600">Aprenda técnicas eficazes para gerenciar a ansiedade e melhorar a saúde mental.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="text-center">
              <i className="fas fa-book-open text-6xl mb-4 text-blue-500"></i>
              <h3 className="text-2xl mb-4 text-gray-800">Acesso ao Conhecimento</h3>
              <p className="text-gray-600">Obtenha acesso a um vasto conhecimento sobre ansiedade e como lidar com ela.</p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="text-center">
              <i className="fas fa-users text-6xl mb-4 text-blue-500"></i>
              <h3 className="text-2xl mb-4 text-gray-800">Comunidade de Apoio</h3>
              <p className="text-gray-600">Junte-se a uma comunidade de pessoas que estão passando pela mesma jornada.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
