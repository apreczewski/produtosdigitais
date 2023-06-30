import React from "react";

export const TestimonialsSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-8 text-center text-gray-800">Depoimentos</h2>
        <div className="space-y-8">
          <div className="border p-4 rounded-md shadow-sm bg-gray-100">
            <p className="text-gray-600">
              &quot;Este curso é incrível! Aprendi tantas estratégias úteis para
              gerenciar minha ansiedade. Recomendo fortemente para qualquer
              pessoa que esteja lutando com a ansiedade.&quot; - Cliente
              Satisfeito
            </p>
          </div>
          <div className="border p-4 rounded-md shadow-sm bg-gray-100">
            <p className="text-gray-600">
              &quot;O ebook é muito informativo e fácil de entender. Eu me sinto
              muito mais confiante em lidar com minha ansiedade agora.
              Obrigado!&quot; - Cliente Satisfeito
            </p>
          </div>
          <div className="border p-4 rounded-md shadow-sm bg-gray-100">
            <p className="text-gray-600">
              &quot;O autor realmente entende o que é a ansiedade e como ela
              pode afetar a vida de uma pessoa. As estratégias que ele
              compartilha no curso e no ebook são realmente eficazes. Estou
              muito satisfeito com minha compra.&quot; - Cliente Satisfeito
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
