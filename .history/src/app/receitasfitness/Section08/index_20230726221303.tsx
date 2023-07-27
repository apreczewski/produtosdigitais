import React from "react";

export const Section08 = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const questions = [
    {
      question: "Como recebo acesso ao curso?",
      answer:
        "Assim que você efetuar o pagamento, receberá um nome de usuário e senha em seu e-mail para acessar a plataforma. Aproveite seu processo de aprendizado e aproveite ao máximo.",
    },
    {
      question: "O pagamento é seguro?",
      answer:
        "O pagamento é feito 100% de forma segura através da Hotmart, a maior e mais segura plataforma de venda de produtos digitais para falantes de espanhol. Eu só pago se você fizer diretamente a eles.",
    },
    {
      question: "Posso usar meu celular para fazer login?",
      answer:
        "Sim! Você pode acessar quantas vezes quiser simplesmente usando seu celular, sem a necessidade de um computador.",
    },
    {
      question: "E se eu não gostar do curso?",
      answer:
        "Você tem uma garantia incondicional de 7 dias! Se, após a compra do curso, dentro de 7 dias você descobrir que não é para você, basta nos enviar um e-mail e nós reembolsaremos todo o seu investimento.",
    },
  ];

  return (
    <div className="bg-blue-500 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-6">PERGUNTAS FREQUENTES:</h2>
      {questions.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setActiveIndex(index)}
            className="text-xl font-semibold"
          >
            {item.question}
          </button>
          {activeIndex === index && <p className="mt-2">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};
