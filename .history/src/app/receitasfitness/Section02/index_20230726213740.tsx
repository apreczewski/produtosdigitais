import Image from 'next/image';
import banner from '@assets/images/fitFlavors-banner.png'

export const Section02 = () => {
  return (
    <div className="flex justify-center items-center rounded w-full">
      <div className="w-full rounded">
        <Image
          className="w-screen rounded"
          src={banner}
          alt="Transformação surpreendente com FitFlavors! Veja o progresso real alcançado com nossas receitas fitness." // Substitua isso por uma descrição da imagem
          layout="responsive"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
