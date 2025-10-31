import { FloatingHeader } from "@/components/ui/floating-header";
import { MeshGradient } from "@paper-design/shaders-react";
import { Card } from "./components/ui/card";
import { Logo } from "./components/logo";
import TallyForm from "./components/tally-form";
import HeroImage from "./components/hero-image";

export default function App() {
  return (
    <div className="relative w-full max-w-2xl mx-auto px-4" id="waitlist">
      <MeshGradient
        width={1280}
        height={720}
        colors={["#e0eaff", "#241d9a", "#5e50f7cf", "#4e57d4"]}
        distortion={0.8}
        swirl={0.04}
        grainMixer={0}
        grainOverlay={0}
        speed={0.32}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <FloatingHeader />
      <div className=" my-8 w-full relative z-1 space-y-4">
        <Card className="flex flex-col p-4 md:p-16">
          <h1 className="text-4xl max-w-lg p-2">
            The most comprehensive AI automation for small business
          </h1>
          <p className="max-w-lg p-2">
            AcMem retains context across sessions, learns from past
            interactions, and eliminates repetitive prompting. Join our waitlist
            and be the first to get in.
          </p>
          <TallyForm />
          <HeroImage />
        </Card>
        <Card className="flex flex-col p-4 md:p-16" id="about">
          <Logo showName />
          <p className="max-w-lg text-justify">
            AcMem retains context across sessions, learns from past
            interactions, and eliminates repetitive prompting. Join our waitlist
            and be the first to get in. AcMem retains context across sessions,
            learns from past interactions, and eliminates repetitive prompting.
            Join our waitlist and be the first to get in. AcMem retains context
            across sessions, learns from past interactions, and eliminates
            repetitive prompting. Join our waitlist and be the first to get in.
            AcMem retains context across sessions, learns from past
            interactions, and eliminates repetitive prompting. Join our waitlist
            and be the first to get in.
          </p>
          <div className="space-y-2">
            <h3 className="font-semibold">Prasanjit Dutta</h3>
            <p className="text-sm">Founder, Gentic</p>
          </div>
          <div className="flex flex-col gap-3 py-6">
            <div>
              Follow us on{" "}
              <a
                href="https://x.com/jit_infinity"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                X ( Formerly Twitter )
              </a>
            </div>
            <p className="text-sm text-slate-600">
              © 2025 Gentic, All Rights Reserved
            </p>
          </div>
        </Card>
      </div>
    </div>
  );
}
