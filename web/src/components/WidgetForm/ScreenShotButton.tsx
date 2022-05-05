import { Camera, Trash } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

interface ScreenshotButtonProps {
  screenshot: string | null;
  onScreenShotTook: (screenshot: string | null) => void;
}

export function ScreenShotButton(props: ScreenshotButtonProps) {
  const [isTakingScreenShot, setisTakingScreenShot] = useState(false);

  async function handleTakeScreenShot() {
    setisTakingScreenShot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64img = canvas.toDataURL("image/png");

    props.onScreenShotTook(base64img)

    setisTakingScreenShot(false);
  }

  if(props.screenshot){
    return (
      <button
      
      type="button"
      className="p-1 w-10 h-10 rounded-md border-transparent flex justify-end items-end text-zinc-400 hover:text-zinc-100 transition-colors"
      onClick={() => props.onScreenShotTook(null)}
      style={{
        backgroundImage: `url(${props.screenshot})`,
        backgroundPosition: 'right bottom',
        backgroundSize: 180
      }}
      >
          <Trash weight="fill"/>
      </button>
    )
  }

  return (
    <>
      <button
        onClick={handleTakeScreenShot}
        className="p-2 bg-zinc-800 rounded-md border-transparent hover:bg-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500"
        type="button"
      >
        {isTakingScreenShot ? <Loading/> : <Camera className="h-6 w-6" />}
      </button>
    </>
  );
}
