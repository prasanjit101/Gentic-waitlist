export default function HeroImage({ caption }: { caption?: string }) {
  return (
    <div className="w-full h-full space-y-1 sm:space-y-2 my-4">
      <img
        src="https://res.cloudinary.com/dz8mikz3h/image/upload/v1761906896/Screenshot_31-10-2025_1201_localhost_stfpvq.jpg"
        alt="Hero"
        className="w-full h-auto object-contain rounded-lg shadow-sm"
      />
      {caption && (
        <p className="text-xs sm:text-sm text-slate-500">{caption}</p>
      )}
    </div>
  );
}
