
import { cn } from "@/lib/utils";

export default function CardDemo() {
  return (
    <div className="max-w-xs w-full">
      <div
        className={cn(
          "group w-full cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl mx-auto flex flex-col justify-end p-4",
          "glass-card border border-glass-border",
          "bg-[url(https://images.unsplash.com/photo-1549399148-0c32a42d8b6e?w=800&h=600&fit=crop&crop=center)] bg-cover",
          // Preload hover image by setting it in a pseudo-element
          "before:bg-[url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=center)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
          "hover:bg-[url(https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&h=600&fit=crop&crop=center)]",
          "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
          "transition-all duration-500"
        )}
      >
        <div className="text relative z-50">
          <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
            Unity Fleet
          </h1>
          <p className="font-normal text-base text-gray-50 relative my-4">
            Experience the future of electric vehicle subscriptions with our premium fleet.
          </p>
        </div>
      </div>
    </div>
  );
}
