import { useEffect } from "react";

declare global {
  interface Window {
    Tally?: {
      loadEmbeds: () => void;
    };
  }
}

export default function TallyForm() {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    const v = function () {
      if (typeof window.Tally !== "undefined") {
        window.Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
          (e as HTMLIFrameElement).src =
            (e as HTMLIFrameElement).dataset.tallySrc || "";
        });
      }
    };
    if (typeof window.Tally !== "undefined") v();
    else if (d.querySelector('script[src="' + w + '"]') == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);
  return (
    <div className="w-full max-w-lg my-4">
      <iframe
        data-tally-src="https://tally.so/embed/n9670G?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
        loading="lazy"
        width="100%"
        height="174"
        title="Dreamreel Waitlist form"
        className="min-h-[174px]"
      ></iframe>
    </div>
  );
}
