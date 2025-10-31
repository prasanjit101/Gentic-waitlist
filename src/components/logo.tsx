import { cn } from "@/lib/utils";
import { Loader } from "lucide-react";

export const Logo = ({
  showName = false,
  className,
}: {
  className?: string;
  showName?: boolean;
}) => (
  <div className={cn("flex gap-2 items-center", className)}>
    <Loader className="size-5" />
    {showName && <p className="font-mono text-base font-bold">Asme</p>}
  </div>
);
