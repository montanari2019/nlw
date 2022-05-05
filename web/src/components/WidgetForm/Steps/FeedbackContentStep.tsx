import { ArrowLeft } from "phosphor-react";
import { FormEvent, useState } from "react";
import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";
import { ScreenShotButton } from "../ScreenShotButton";

interface FeedbackContentStepProps {
  feedbackType: FeedbackType;
  onFeedbackRestartRequested: () => void;
  onFeedbackSent: () => void
}

export function FeedbackContentStep(props: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[props.feedbackType];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log({
      screenshot,
      comment,
    });

    props.onFeedbackSent()
  }

  return (
    <>
      <header>
        <button
          type="button"
          className="top-5 left-5 absolute text-zinc-400 hover:text-zinc-100"
          onClick={props.onFeedbackRestartRequested}
        >
          <ArrowLeft className="w-4 h-4" weight="bold" />
        </button>

        <span className="text-xl leading-6 flex flex-row gap-2 items-center">
          <img
            src={feedbackTypeInfo.img.source}
            alt={feedbackTypeInfo.img.alt}
            className="h-6 w-6"
          />

          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>

      <form onSubmit={handleSubmit} className="my-4 w-full">
        <textarea
          className="min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:border-brand-500 focus:ring-brand-500 focus:ring-1 focus:outline-none resize-none scrollbar scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin"
          placeholder="Conte com detalhes o que está acontecendo"
          onChange={(event) => setComment(event.target.value)}
        />

        <footer className="flex gap-2 mt-2">
          <ScreenShotButton
            screenshot={screenshot}
            onScreenShotTook={setScreenshot}
          />

          <button
            type="submit"
            disabled={comment.length == 0}
            className="p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500"
          >
            Enviar feedback
          </button>
        </footer>
      </form>
    </>
  );
}
