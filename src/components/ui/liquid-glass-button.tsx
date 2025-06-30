
"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-primary-foreground hover:bg-destructive/90",
        cool: "dark:inset-shadow-2xs dark:inset-shadow-white/10 bg-linear-to-t border border-b-2 border-zinc-950/40 from-primary to-primary/85 shadow-md shadow-primary/20 ring-1 ring-inset ring-white/25 transition-[filter] duration-200 hover:brightness-110 active:brightness-90 dark:border-x-0 text-primary-foreground dark:text-primary-foreground dark:border-t-0 dark:border-primary/50 dark:ring-white/5",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

const liquidbuttonVariants = cva(
  "inline-flex items-center transition-colors justify-center cursor-pointer gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default: "bg-transparent hover:scale-105 duration-300 transition text-unity-platinum",
        unity: "bg-transparent hover:scale-105 duration-300 transition text-unity-champagne gradient-luxury-text",
        automotive: "bg-transparent hover:scale-105 duration-300 transition text-unity-signature gradient-accent-text",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 text-xs gap-1.5 px-4 has-[>svg]:px-4",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        xl: "h-12 rounded-md px-8 has-[>svg]:px-6",
        xxl: "h-14 rounded-md px-10 has-[>svg]:px-8",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "unity",
      size: "xxl",
    },
  }
)

function LiquidButton({
  className,
  variant,
  size,
  asChild = false,
  children,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof liquidbuttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <>
      <Comp
        data-slot="button"
        className={cn(
          "relative font-display font-semibold",
          liquidbuttonVariants({ variant, size, className })
        )}
        {...props}
      >
        <div className="absolute top-0 left-0 z-0 h-full w-full rounded-full 
            shadow-[0_0_6px_rgba(107,70,193,0.15),0_2px_6px_rgba(107,70,193,0.25),inset_3px_3px_0.5px_-3px_rgba(212,175,55,0.9),inset_-3px_-3px_0.5px_-3px_rgba(212,175,55,0.85),inset_1px_1px_1px_-0.5px_rgba(10,132,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(10,132,255,0.6),inset_0_0_6px_6px_rgba(107,70,193,0.12),inset_0_0_2px_2px_rgba(107,70,193,0.06),0_0_12px_rgba(212,175,55,0.25)] 
        transition-all duration-300
        hover:shadow-[0_0_8px_rgba(107,70,193,0.25),0_2px_8px_rgba(107,70,193,0.35),inset_3px_3px_0.5px_-3px_rgba(212,175,55,1),inset_-3px_-3px_0.5px_-3px_rgba(212,175,55,0.95),inset_1px_1px_1px_-0.5px_rgba(10,132,255,0.8),inset_-1px_-1px_1px_-0.5px_rgba(10,132,255,0.8),inset_0_0_8px_8px_rgba(107,70,193,0.18),inset_0_0_4px_4px_rgba(107,70,193,0.12),0_0_20px_rgba(212,175,55,0.4)]
        dark:shadow-[0_0_8px_rgba(107,70,193,0.15),0_2px_6px_rgba(107,70,193,0.25),inset_3px_3px_0.5px_-3.5px_rgba(212,175,55,0.9),inset_-3px_-3px_0.5px_-3.5px_rgba(212,175,55,0.85),inset_1px_1px_1px_-0.5px_rgba(10,132,255,0.6),inset_-1px_-1px_1px_-0.5px_rgba(10,132,255,0.6),inset_0_0_6px_6px_rgba(107,70,193,0.12),inset_0_0_2px_2px_rgba(107,70,193,0.06),0_0_12px_rgba(11,15,26,0.15)]" />
        <div
          className="absolute top-0 left-0 isolate -z-10 h-full w-full overflow-hidden rounded-md"
          style={{ backdropFilter: 'url("#unity-glass")' }}
        />

        <div className="pointer-events-none z-10">
          {children}
        </div>
        <UnityGlassFilter />
      </Comp>
    </>
  )
}

function UnityGlassFilter() {
  return (
    <svg className="hidden">
      <defs>
        <filter
          id="unity-glass"
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          colorInterpolationFilters="sRGB"
        >
          {/* Generate turbulent noise for automotive distortion */}
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.03 0.03"
            numOctaves="2"
            seed="5"
            result="unityTurbulence"
          />

          {/* Blur the turbulence pattern for luxury effect */}
          <feGaussianBlur in="unityTurbulence" stdDeviation="1.5" result="luxuryNoise" />

          {/* Displace the source graphic with premium distortion */}
          <feDisplacementMap
            in="SourceGraphic"
            in2="luxuryNoise"
            scale="40"
            xChannelSelector="R"
            yChannelSelector="B"
            result="luxuryDisplaced"
          />

          {/* Apply Unity Fleet premium blur */}
          <feGaussianBlur in="luxuryDisplaced" stdDeviation="2.5" result="unityBlur" />

          {/* Output the luxury automotive result */}
          <feComposite in="unityBlur" in2="unityBlur" operator="over" />
        </filter>
      </defs>
    </svg>
  );
}

type ColorVariant =
  | "default"
  | "primary"
  | "success"
  | "error"
  | "gold"
  | "bronze"
  | "unity"
  | "automotive";
 
interface MetalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ColorVariant;
}
 
const colorVariants: Record<
  ColorVariant,
  {
    outer: string;
    inner: string;
    button: string;
    textColor: string;
    textShadow: string;
  }
> = {
  default: {
    outer: "bg-gradient-to-b from-[#000] to-[#A0A0A0]",
    inner: "bg-gradient-to-b from-[#FAFAFA] via-[#3E3E3E] to-[#E5E5E5]",
    button: "bg-gradient-to-b from-[#B9B9B9] to-[#969696]",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(80_80_80_/_100%)]",
  },
  unity: {
    outer: "bg-gradient-to-b from-unity-midnight to-unity-charcoal",
    inner: "bg-gradient-to-b from-unity-platinum/20 via-unity-purple/40 to-unity-champagne/20",
    button: "bg-gradient-to-b from-unity-champagne to-unity-signature",
    textColor: "text-unity-midnight font-display font-bold",
    textShadow: "[text-shadow:_0_-1px_0_rgb(212_175_55_/_80%)]",
  },
  automotive: {
    outer: "bg-gradient-to-b from-unity-carbon to-unity-charcoal",
    inner: "bg-gradient-to-b from-unity-teal/20 via-unity-signature/40 to-unity-purple/20",
    button: "bg-gradient-to-b from-unity-signature to-unity-teal",
    textColor: "text-white font-display font-semibold",
    textShadow: "[text-shadow:_0_-1px_0_rgb(10_132_255_/_80%)]",
  },
  primary: {
    outer: "bg-gradient-to-b from-[#000] to-[#A0A0A0]",
    inner: "bg-gradient-to-b from-primary via-secondary to-muted",
    button: "bg-gradient-to-b from-primary to-primary/40",
    textColor: "text-white",
    textShadow: "[text-shadow:_0_-1px_0_rgb(30_58_138_/_100%)]",
  },
  success: {
    outer: "bg-gradient-to-b from-[#005A43] to-[#7CCB9B]",
    inner: "bg-gradient-to-b from-[#E5F8F0] via-[#00352F] to-[#D1F0E6]",
    button: "bg-gradient-to-b from-[#9ADBC8] to-[#3E8F7C]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(6_78_59_/_100%)]",
  },
  error: {
    outer: "bg-gradient-to-b from-[#5A0000] to-[#FFAEB0]",
    inner: "bg-gradient-to-b from-[#FFDEDE] via-[#680002] to-[#FFE9E9]",
    button: "bg-gradient-to-b from-[#F08D8F] to-[#A45253]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(146_64_14_/_100%)]",
  },
  gold: {
    outer: "bg-gradient-to-b from-unity-champagne to-unity-gold",
    inner: "bg-gradient-to-b from-unity-platinum via-unity-champagne/60 to-unity-gold/80",
    button: "bg-gradient-to-b from-unity-gold to-unity-champagne",
    textColor: "text-unity-midnight font-display font-bold",
    textShadow: "[text-shadow:_0_-1px_0_rgb(212_175_55_/_100%)]",
  },
  bronze: {
    outer: "bg-gradient-to-b from-[#864813] to-[#E9B486]",
    inner: "bg-gradient-to-b from-[#EDC5A1] via-[#5F2D01] to-[#FFDEC1]",
    button: "bg-gradient-to-b from-[#FFE3C9] to-[#A36F3D]",
    textColor: "text-[#FFF7F0]",
    textShadow: "[text-shadow:_0_-1px_0_rgb(124_45_18_/_100%)]",
  },
};
 
const metalButtonVariants = (
  variant: ColorVariant = "unity",
  isPressed: boolean,
  isHovered: boolean,
  isTouchDevice: boolean,
) => {
  const colors = colorVariants[variant];
  const transitionStyle = "all 300ms cubic-bezier(0.4, 0, 0.2, 1)";
 
  return {
    wrapper: cn(
      "relative inline-flex transform-gpu rounded-luxury p-[1.5px] will-change-transform shadow-unity-premium",
      colors.outer,
    ),
    wrapperStyle: {
      transform: isPressed
        ? "translateY(2px) scale(0.98)"
        : "translateY(0) scale(1)",
      boxShadow: isPressed
        ? "0 2px 4px rgba(107, 70, 193, 0.25)"
        : isHovered && !isTouchDevice
          ? "0 8px 24px rgba(107, 70, 193, 0.3), 0 0 20px rgba(212, 175, 55, 0.2)"
          : "0 4px 16px rgba(107, 70, 193, 0.2)",
      transition: transitionStyle,
      transformOrigin: "center center",
    },
    inner: cn(
      "absolute inset-[1.5px] transform-gpu rounded-luxury will-change-transform",
      colors.inner,
    ),
    innerStyle: {
      transition: transitionStyle,
      transformOrigin: "center center",
      filter:
        isHovered && !isPressed && !isTouchDevice ? "brightness(1.1)" : "none",
    },
    button: cn(
      "relative z-10 m-[1px] rounded-luxury inline-flex h-12 transform-gpu cursor-pointer items-center justify-center overflow-hidden px-8 py-3 text-sm leading-none will-change-transform outline-none",
      colors.button,
      colors.textColor,
      colors.textShadow,
    ),
    buttonStyle: {
      transform: isPressed ? "scale(0.96)" : "scale(1)",
      transition: transitionStyle,
      transformOrigin: "center center",
      filter:
        isHovered && !isPressed && !isTouchDevice ? "brightness(1.05)" : "none",
    },
  };
};
 
const UnityShineEffect = ({ isPressed }: { isPressed: boolean }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-20 overflow-hidden transition-opacity duration-300",
        isPressed ? "opacity-30" : "opacity-0",
      )}
    >
      <div className="absolute inset-0 rounded-luxury bg-gradient-to-r from-transparent via-unity-champagne/60 to-transparent" />
    </div>
  );
};
 
export const MetalButton = React.forwardRef<
  HTMLButtonElement,
  MetalButtonProps
>(({ children, className, variant = "unity", ...props }, ref) => {
  const [isPressed, setIsPressed] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [isTouchDevice, setIsTouchDevice] = React.useState(false);
 
  React.useEffect(() => {
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);
 
  const buttonText = children || "Unity Fleet";
  const variants = metalButtonVariants(
    variant,
    isPressed,
    isHovered,
    isTouchDevice,
  );
 
  const handleInternalMouseDown = () => {
    setIsPressed(true);
  };
  const handleInternalMouseUp = () => {
    setIsPressed(false);
  };
  const handleInternalMouseLeave = () => {
    setIsPressed(false);
    setIsHovered(false);
  };
  const handleInternalMouseEnter = () => {
    if (!isTouchDevice) {
      setIsHovered(true);
    }
  };
  const handleInternalTouchStart = () => {
    setIsPressed(true);
  };
  const handleInternalTouchEnd = () => {
    setIsPressed(false);
  };
  const handleInternalTouchCancel = () => {
    setIsPressed(false);
  };
 
  return (
    <div className={variants.wrapper} style={variants.wrapperStyle}>
      <div className={variants.inner} style={variants.innerStyle}></div>
      <button
        ref={ref}
        className={cn(variants.button, className)}
        style={variants.buttonStyle}
        {...props}
        onMouseDown={handleInternalMouseDown}
        onMouseUp={handleInternalMouseUp}
        onMouseLeave={handleInternalMouseLeave}
        onMouseEnter={handleInternalMouseEnter}
        onTouchStart={handleInternalTouchStart}
        onTouchEnd={handleInternalTouchEnd}
        onTouchCancel={handleInternalTouchCancel}
      >
        <UnityShineEffect isPressed={isPressed} />
        {buttonText}
        {isHovered && !isPressed && !isTouchDevice && (
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t rounded-luxury from-transparent to-unity-champagne/10" />
        )}
      </button>
    </div>
  );
});
 
MetalButton.displayName = "MetalButton";

export { Button, buttonVariants, liquidbuttonVariants, LiquidButton }
