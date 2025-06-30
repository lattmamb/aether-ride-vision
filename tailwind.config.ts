
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
        // Unity Fleet Premium Brand Colors
        unity: {
          midnight: "#0B0F1A",
          charcoal: "#1A1D26",
          platinum: "#E8E9EA",
          champagne: "#D4AF37",
          signature: "#0A84FF",
          teal: "#00D4FF",
          purple: "#6B46C1",
          'deep-purple': "#4C1D95",
          gold: "#F59E0B",
          carbon: "#111827"
        },
        // Enhanced Tesla colors with luxury variants
        tesla: {
          blue: "#0A84FF",
          purple: "#6B46C1", // Updated to luxury purple
          brightPurple: "#8B5CF6",
          deepPurple: "#4C1D95",
          red: "#FF3B30",
          green: "#34C759",
          dark: {
            DEFAULT: "#0B0F1A", // Updated to Unity midnight
            50: "rgba(11, 15, 26, 0.5)",
            80: "rgba(11, 15, 26, 0.8)",
          }
        },
        glass: {
          DEFAULT: "rgba(255, 255, 255, 0.05)",
          border: "rgba(255, 255, 255, 0.1)",
          highlight: "rgba(255, 255, 255, 0.2)",
          premium: "rgba(255, 255, 255, 0.15)",
          luxury: "rgba(212, 175, 55, 0.1)"
        },
        brand: {
          purple: {
            DEFAULT: "#6B46C1",
            light: "#D6BCFA",
            dark: "#4C1D95",
            deeper: "#3B0764"
          },
          accent: {
            blue: "#0A84FF",
            teal: "#00D4FF",
            green: "#34C759",
            orange: "#F59E0B",
            pink: "#D946EF",
            gold: "#D4AF37"
          }
        }
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
        'luxury': '20px',
        'premium': '24px'
			},
      fontFamily: {
        'display': ['Orbitron', 'SF Pro Display', 'system-ui', 'sans-serif'],
        'body': ['Inter', 'SF Pro Text', 'system-ui', 'sans-serif'],
        'accent': ['Playfair Display', 'Georgia', 'serif'],
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace']
      },
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
        'float': {
          '0%, 100%': { 
            transform: 'translateY(0)' 
          },
          '50%': { 
            transform: 'translateY(-10px)' 
          },
        },
        'pulse-glow': {
          '0%, 100%': {
            opacity: '0.8',
            transform: 'scale(1)',
          },
          '50%': {
            opacity: '1',
            transform: 'scale(1.03)',
          },
        },
        'shine': {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
        'fade-in-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'scale-in': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)'
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)'
          }
        },
        // Unity Fleet Premium Animations
        'unity-glow-pulse': {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(107, 70, 193, 0.3)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(107, 70, 193, 0.6)'
          }
        },
        'unity-slide-luxury': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'unity-shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' }
        },
        'unity-rotate-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' }
        }
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'shine': 'shine 8s linear infinite',
        'gradient-flow': 'gradient-flow 8s ease infinite',
        'fade-in-up': 'fade-in-up 0.5s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
        // Unity Fleet Premium Animations
        'unity-glow': 'unity-glow-pulse 2s ease-in-out infinite',
        'unity-slide': 'unity-slide-luxury 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'unity-shimmer': 'unity-shimmer 2s ease-in-out infinite',
        'unity-rotate': 'unity-rotate-slow 20s linear infinite'
			},
      boxShadow: {
        'inner-glow': 'inset 0 0 20px 0 rgba(107, 70, 193, 0.15)',
        'card-hover': '0 8px 30px rgba(107, 70, 193, 0.2)',
        'purple-glow': '0 0 20px rgba(107, 70, 193, 0.4)',
        'unity-premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
        'unity-glow': '0 0 30px rgba(107, 70, 193, 0.3)',
        'unity-luxury': '0 20px 40px rgba(212, 175, 55, 0.2)',
        'unity-glass': '0 8px 32px rgba(0, 0, 0, 0.12)'
      },
      backdropBlur: {
        'unity': '20px',
        'luxury': '24px'
      }
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
