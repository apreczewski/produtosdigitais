import React from 'react';
import Image from 'next/image';

export const AuthorSection = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl mb-8 text-center text-gray-800">Sobre o Autor</h2>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0 flex flex-col items-center">
            <div className="w-48 h-48 relative mb-8">
              <Image src="https://images.pexels.com/photos/3768142/pexels-photo-3768142.jpeg" alt="Autor" layout="fill" className="rounded-full" />
            </div>
            <h3 className="text-2xl mb-4 text-center text-gray-800">Nome do Autor</h3>
            <p className="text-gray-600">O autor é um especialista em gerenciamento de ansiedade com anos de experiência no campo. Ele dedicou sua vida a ajudar os outros a superar seus desafios e alcançar seu potencial máximo.</p>
          </div>
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h3 className="text-2xl mb-4 text-center text-gray-800">Depoimentos</h3>
            <div className="space-y-4">
              <p className="text-gray-600">&quot;Este curso mudou minha vida. Aprendi a gerenciar minha ansiedade de maneira eficaz e agora me sinto mais confiante e em paz.&quot; - Cliente Satisfeito</p>
              <p className="text-gray-600">&quot;O ebook é incrível. É cheio de informações úteis e práticas. Eu recomendo para qualquer pessoa que esteja lutando com a ansiedade.&quot; - Cliente Satisfeito</p>
              <p className="text-gray-600">&quot;O autor realmente entende o que é a ansiedade e como ela pode afetar a vida de uma pessoa. As estratégias que ele compartilha no curso e no ebook são realmente eficazes.&quot; - Cliente Satisfeito</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
