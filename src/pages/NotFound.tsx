import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { to: "/", label: "Home" },
  { to: "/vehicles", label: "Vehicles" },
  { to: "/pricing", label: "Pricing" },
  { to: "/locations", label: "Locations" },
  { to: "/about", label: "About" },
];

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.warn("404: route not found:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Page not found</h1>
        <p className="text-muted-foreground mb-8">
          We couldn't find <code className="break-all">{location.pathname}</code>. Try one of these pages:
        </p>
        <nav aria-label="Helpful links" className="flex flex-wrap gap-3 justify-center">
          {links.map((l) => (
            <Button key={l.to} asChild variant={l.to === "/" ? "default" : "outline"}>
              <Link to={l.to}>{l.label}</Link>
            </Button>
          ))}
        </nav>
      </div>
    </main>
  );
};

export default NotFound;
