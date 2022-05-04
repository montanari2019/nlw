import { useState } from "react";
import bugImageUrl from "../../assets/bug.svg";
import ideaImageUrl from "../../assets/idea.svg";
import thoughtImageUrl from "../../assets/thought.svg";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    img: {
      source: bugImageUrl,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",

    img: {
      source: ideaImageUrl,
      alt: "Imagem de uma lâmpada",
    },
  },
  OTHER: {
    title: "Outro",

    img: {
      source: thoughtImageUrl,
      alt: "Imagem de um balão de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetFrom() {
  // Salvando o feedbackType escolido pelo usuário
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleFeedbackRestart(){
    setFeedbackType(null)
  }

  return (
    <div>
      <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        
        

        {!feedbackType ? (
         <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/>
        ) : (

         <FeedbackContentStep 
         
          feedbackType={feedbackType}
          onFeedbackRestartRequested={handleFeedbackRestart}
         
         />
          
        )}

        <footer className="text-xs text-neutral-400">
          Feito com ♥ por{" "}
          <a
            className="underline underline-offset-2"
            href="https://github.com/montanari2019"
          >
            Ikaro Montanari
          </a>
        </footer>
      </div>
    </div>
  );
}