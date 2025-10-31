import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Logo } from "../logo";

export function FloatingHeader() {
  const links = [
    {
      label: "About",
      href: "#about",
    },
  ];

  return (
    <header
      className={cn(
        "sticky top-5 z-50",
        "mx-auto w-full max-w-2xl rounded-lg border shadow",
        "bg-background/95 supports-backdrop-filter:bg-background/80 backdrop-blur-lg",
      )}
    >
      <nav className="mx-auto flex items-center justify-between p-1.5">
        <div className="hover:bg-accent flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100">
          <Logo showName />
        </div>
        <div className="flex items-center gap-2">
          <div className="items-center gap-1 flex">
            {links.map((link) => (
              <a
                className={buttonVariants({ variant: "ghost", size: "sm" })}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <Button size="sm" asChild>
              <a href="#waitlist">Join Waitlist</a>
            </Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
