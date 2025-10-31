import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils"; // Your utility for merging Tailwind classes

// Define the type for a single items item
export interface Item {
  id: string | number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

// Props for the OfferCard component
interface ItemCardProps {
  item: Item;
}

// The individual card component with hover animation
const ItemCard = React.forwardRef<HTMLAnchorElement, ItemCardProps>(
  ({ item }) => (
    <motion.div
      className="relative shrink-0 w-[300px] h-[350px] rounded-2xl overflow-hidden group snap-start"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{ perspective: "1000px" }}
    >
      {/* Background Image */}
      <img
        src={item.imageSrc}
        alt={item.imageAlt}
        className="absolute inset-0 w-full h-2/4 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Card Content */}
      <div className="absolute bottom-0 left-0 right-0 h-2/4 bg-card p-5 flex flex-col justify-between">
        <div className="space-y-2">
          {/* Title & Description */}
          <h3 className="text-lg font-bold text-card-foreground leading-tight">
            {item.title}
          </h3>
          <p className="text-sm text-muted-foreground">{item.description}</p>
        </div>
      </div>
    </motion.div>
  ),
);
ItemCard.displayName = "OfferCard";

export interface ItemCarouselProps
  extends React.HTMLAttributes<HTMLDivElement> {
  items: Item[];
}

// The main carousel component with scroll functionality
const ItemCarousel = React.forwardRef<HTMLDivElement, ItemCarouselProps>(
  ({ items, className, ...props }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
      if (scrollContainerRef.current) {
        const { current } = scrollContainerRef;
        const scrollAmount = current.clientWidth * 0.8; // Scroll by 80% of the container width
        current.scrollBy({
          left: direction === "left" ? -scrollAmount : scrollAmount,
          behavior: "smooth",
        });
      }
    };

    return (
      <div
        ref={ref}
        className={cn("relative w-full group", className)}
        {...props}
      >
        {/* Left Scroll Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute top-1/2 -translate-y-1/2 left-0 z-10 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background/80 disabled:opacity-0"
          aria-label="Scroll Left"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Scrollable Container */}
        <div
          ref={scrollContainerRef}
          className="flex space-x-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
        >
          {items.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute top-1/2 -translate-y-1/2 right-0 z-10 w-10 h-10 rounded-full bg-background/50 backdrop-blur-sm border border-border flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background/80 disabled:opacity-0"
          aria-label="Scroll Right"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    );
  },
);
ItemCarousel.displayName = "ItemCarousel";

export { ItemCarousel, ItemCard };
