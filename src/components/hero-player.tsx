"use client";

import { useState } from "react";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface HeroPlayerProps {
  thumbnailUrl: string;
  videoUrl: string;
  title?: string;
  className?: string;
}

export default function HeroPlayer({
  thumbnailUrl,
  videoUrl,
  title = "Video Player",
  className = "",
}: HeroPlayerProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Extract YouTube video ID from URL
  const getYouTubeEmbedUrl = (url: string) => {
    const videoIdMatch = url.match(
      /(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/\s]{11})/,
    );
    const videoId = videoIdMatch ? videoIdMatch[1] : null;
    return videoId
      ? `https://www.youtube.com/embed/${videoId}?autoplay=1`
      : url;
  };

  return (
    <>
      <div
        className={`relative w-full h-full group cursor-pointer overflow-hidden rounded-lg ${className}`}
        onClick={() => setIsOpen(true)}
      >
        {/* Thumbnail Image */}
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />

        {/* Play Button */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Button
            size="icon"
            className="h-16 w-16 rounded-full bg-white/90 hover:bg-white text-black shadow-lg transition-all duration-300 group-hover:scale-110"
            aria-label="Play video"
          >
            <Play className="h-8 w-8 ml-1" fill="currentColor" />
          </Button>
        </div>
      </div>

      {/* Video Dialog */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-4xl p-0 bg-black border-none">
          <DialogTitle className="sr-only">{title}</DialogTitle>
          <div className="relative w-full aspect-video">
            <iframe
              src={getYouTubeEmbedUrl(videoUrl)}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-lg"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
