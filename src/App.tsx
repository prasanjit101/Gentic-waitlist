import { FloatingHeader } from "@/components/ui/floating-header";
import { MeshGradient } from "@paper-design/shaders-react";
import { Card } from "./components/ui/card";
import { Logo } from "./components/logo";
import TallyForm from "./components/tally-form";
import HeroImage from "./components/hero-image";
import { ItemCarousel } from "@/components/carousel";
import { projects } from "./lib/projects";
import { Badge } from "./components/ui/badge";

export default function App() {
  return (
    <div className="relative w-full max-w-2xl mx-auto px-3 sm:px-4" id="waitlist">
      <MeshGradient
        width="100%"
        height="100%"
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
      <div className="my-4 sm:my-8 w-full relative z-1 space-y-3 sm:space-y-4">
        <Card className="flex flex-col p-4 sm:p-8 md:p-16">
          <Badge variant={'outline'} className="text-xs sm:text-sm w-fit">For growing businesses with digital operations</Badge>
          <h1 className="text-2xl sm:text-3xl md:text-4xl max-w-lg p-2 leading-tight">
            {/* The one-liner of the product */}
            Describe your goal and turn it into automations.
          </h1>
          <p className="max-w-lg p-2 text-sm sm:text-base">
            {/* Subheading */}
            Gentic helps your business grow faster and operate more efficiently by providing an all-in-one platform that centralizes and automates AI-powered workflows—no code required. Reduce your dependency on multiple costly tools with one easy-to-use solution.
          </p>
          <TallyForm />
          <HeroImage caption="in progress" />
        </Card>
        <Card className="flex flex-col p-4 sm:p-8 md:p-16" id="about">
          <Logo showName />
          <p className="max-w-lg text-justify text-sm sm:text-base">
            {/* Explain why the product exists. structured as - the problem faced by a niche, the solution offered by the product */}
            As a small business owner operating digitally, managing multiple tools and platforms to handle customer interactions, data management, and automation can be overwhelming and time-consuming. Gentic was created to address this challenge by providing an all-in-one platform that allows small businesses to easily create AI-driven automations without any coding knowledge. By simplifying the process of building and managing automations, Gentic empowers small businesses to enhance their operations, improve customer experiences, and ultimately grow faster in a competitive market.
          </p>
          <div className="space-y-2 mt-4">
            <h3 className="font-semibold text-base sm:text-lg">Prasanjit Dutta</h3>
            <p className="text-xs sm:text-sm">Founder, Gentic</p>
          </div>
          <div className="flex flex-col gap-3 py-4 sm:py-6">
            <div className="text-sm sm:text-base">
              Follow me on{" "}
              <a
                href="https://x.com/jit_infinity"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500"
              >
                X ( Formerly Twitter )
              </a>
            </div>
            <p className="text-xs sm:text-sm text-slate-600">
              © 2025 Gentic, All Rights Reserved
            </p>
          </div>
        </Card>
        <Card className="flex flex-col p-4 sm:p-8 md:p-16" id="projects">
          <h2 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Also check out</h2>
          <ItemCarousel items={projects} />
        </Card>
      </div>
    </div>
  );
}
