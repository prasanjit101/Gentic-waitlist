import { useEffect } from "react";

function App() {
  useEffect(() => {
    const d = document;
    const w = "https://tally.so/widgets/embed.js";
    const v = function () {
      if (typeof Tally !== "undefined") {
        Tally.loadEmbeds();
      } else {
        d.querySelectorAll("iframe[data-tally-src]:not([src])").forEach((e) => {
          (e as HTMLIFrameElement).src =
            (e as HTMLIFrameElement).dataset.tallySrc || "";
        });
      }
    };
    if (typeof Tally !== "undefined") v();
    else if (d.querySelector('script[src="' + w + '"]') == null) {
      const s = d.createElement("script");
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }
  }, []);
  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <div className="w-full max-w-md">
        <iframe
          data-tally-src="https://tally.so/embed/n9670G?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="174"
          title="Dreamreel Waitlist form"
        ></iframe>
      </div>
    </div>
  );
}

export default App;
