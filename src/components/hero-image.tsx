export default function HeroImage({ caption }: { caption?: string }) {
  return (
    <div className="w-full h-full space-y-1">
      <img
        src="https://res.cloudinary.com/dz8mikz3h/image/upload/v1761906896/Screenshot_31-10-2025_1201_localhost_stfpvq.jpg"
        alt="Hero"
        className="w-full h-full object-contain rounded-lg"
      />
      <p className="text-xs text-slate-500">{caption}</p>
    </div>
  );
}
