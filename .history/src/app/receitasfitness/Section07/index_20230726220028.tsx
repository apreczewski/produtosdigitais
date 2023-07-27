import React from "react";
import Image from "next/image";

export const Section07 = () => {
  return (
    <div className="flex items-center bg-yellow-500 text-white p-8 rounded-lg shadow-lg">
      <div className="w-1/3">
        <Image
          src="https://via.placeholder.com/150"
          alt="Garantia"
          width={150}
          height={150}
        />
      </div>
      <div className="w-2/3 pl-8">
        <h2 className="text-3xl font-bold mb-4">GARANTIA DE 7 DIAS!</h2>
        <p className="text-lg">
          Temos absoluta certeza de que o 101 DICAS PARA PERDER PESO DIARIAMENTE
          será muito efetivo para o seu processo de EMAGRECIMENTO, mas se em até
          7 dias após a compra você não estiver satisfeito com o produto por
          qualquer motivo, devolvemos todo o seu dinheiro!
        </p>
      </div>
    </div>
  );
};
