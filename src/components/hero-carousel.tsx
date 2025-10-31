import { ItemCarousel, type Item } from "@/components/carousel";

// Sample data for the carousel
const carouselItems: Item[] = [];

// Shows images, screenshots of the app for which the waitlist exists
export default function HeroCarousel({ show = true }: { show?: boolean }) {
  return show ? <ItemCarousel items={carouselItems} /> : null;
}
