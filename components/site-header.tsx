
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 flex w-full justify-center bg-background">
      <div className="flex h-16 items-center justify-center ">

        <MainNav />

        <nav className="absolute right-4">
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
