import { OfferCarousel, type Offer } from "@/components/carousel";

// Sample data for the carousel
const sampleOffers: Offer[] = [
  {
    id: 1,
    imageSrc:
      "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?q=80&w=1966&auto=format&fit=crop",
    imageAlt: "International travel landmarks collage",
    tag: "Discount",
    title: "Up to ₹3000 OFF",
    description: "On International Flights.",
    brandLogoSrc:
      "https://static.twidpay.com/co/mobile_app_images/brand_logos/square/easemytripsquare.png?size=40",
    brandName: "Ease My Trip",
    promoCode: "EMTWID",
    href: "#",
  },
  {
    id: 2,
    imageSrc:
      "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop",
    imageAlt: "A delicious looking burger",
    tag: "Discount",
    title: "Snack more. Save more.",
    description: "Get ₹75 OFF on purchases of ₹299 or more.",
    brandLogoSrc:
      "https://static.twidpay.com/co/mobile_app_images/brand_logos/square/mcdonaldssquare.png?size=40",
    brandName: "McD",
    promoCode: "TWID75",
    href: "#",
  },
  {
    id: 3,
    imageSrc:
      "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Logos of popular streaming services",
    tag: "Discount",
    title: "Flat ₹550 OFF on Timesprime",
    description: "Exclusive offer on Times Prime Membership.",
    brandLogoSrc:
      "https://static.twidpay.com/co/mobile_app_images/brand_logos/square/timesprimesquare.png?size=40",
    brandName: "Timesprime",
    promoCode: "TWID550",
    href: "#",
  },
  {
    id: 4,
    imageSrc:
      "https://plus.unsplash.com/premium_photo-1728889749470-97eb0a2e2028?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FzaGJhY2t8ZW58MHx8MHx8fDA%3D?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "A person holding a phone with a payment app",
    tag: "Cashback",
    title: "10% Instant Cashback",
    description: "On RuPay Credit Card transactions.",
    brandLogoSrc:
      "https://static.twidpay.com/co/mobile_app_images/icons/rupay_rcc.png?size=40",
    brandName: "Rupay CC",
    promoCode: "RCC10",
    href: "#",
  },
  {
    id: 5,
    imageSrc:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1974&auto=format&fit=crop",
    imageAlt: "Gourmet food on a plate",
    tag: "Offer",
    title: "Flat 20% OFF",
    description: "On dining at partner restaurants.",
    brandLogoSrc:
      "https://twidpay.com/assets/new-square-logos/swiggysquare.webp?size=40",
    brandName: "Dineout",
    promoCode: "DINE20",
    href: "#",
  },
];

// The demo component
export default function OfferCarouselDemo() {
  return <OfferCarousel offers={sampleOffers} />;
}
