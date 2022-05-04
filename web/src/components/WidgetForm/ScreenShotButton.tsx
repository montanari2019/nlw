import { Camera } from "phosphor-react";
import html2canvas from "html2canvas";
import { useState } from "react";
import { Loading } from "../Loading";

export function ScreenShotButton() {
  const [isTakingScreenShot, setisTakingScreenShot] = useState(false);

  async function handleTakeScreenShot() {
    setisTakingScreenShot(true);

    const canvas = await html2canvas(document.querySelector("html")!);
    const base64img = canvas.toDataURL("image/png");

    console.log(base64img);

    setisTakingScreenShot(false);
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
