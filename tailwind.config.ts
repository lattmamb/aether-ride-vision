
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
					foreground: 'hsl(var(--card-foreground))',
					border: 'hsl(var(--card-border))'
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
				// Silver/Metallic Palette (from logo aesthetic)
				silver: {
					50: 'hsl(var(--silver-50))',
					100: 'hsl(var(--silver-100))',
					200: 'hsl(var(--silver-200))',
					300: 'hsl(var(--silver-300))',
					400: 'hsl(var(--silver-400))',
					500: 'hsl(var(--silver-500))',
					600: 'hsl(var(--silver-600))',
					700: 'hsl(var(--silver-700))',
					800: 'hsl(var(--silver-800))',
					900: 'hsl(var(--silver-900))',
					DEFAULT: 'hsl(var(--silver-400))'
				},
				// Unity Super-App Design System
				unity: {
					cyan: {
						DEFAULT: '#00E0FF',
						light: '#35F2DB',
						dark: '#00B8D4',
						glow: 'rgba(0, 224, 255, 0.5)',
						muted: 'rgba(0, 224, 255, 0.1)'
					},
					purple: {
						DEFAULT: '#667EEA',
						light: '#9F7AEA',
						dark: '#764BA2',
						glow: 'rgba(102, 126, 234, 0.5)',
						muted: 'rgba(102, 126, 234, 0.1)'
					},
					dark: {
						DEFAULT: '#0A0A0F',
						light: '#12121A',
						lighter: '#1A1A24',
						card: '#0E0E14'
					}
				},
				glass: {
					base: 'rgba(255, 255, 255, 0.02)',
					border: 'rgba(255, 255, 255, 0.06)',
					highlight: 'rgba(255, 255, 255, 0.1)',
					DEFAULT: "rgba(255, 255, 255, 0.04)",
				},
				// Legacy colors for backward compatibility
				tesla: {
					blue: "#00E0FF",
					purple: "#667EEA",
					brightPurple: "#9F7AEA",
					deepPurple: "#764BA2",
					red: "#FF4757",
					green: "#2ED573",
					dark: {
						DEFAULT: "#0A0A0F",
						50: "rgba(10, 10, 15, 0.5)",
						80: "rgba(10, 10, 15, 0.8)",
					}
				},
				brand: {
					purple: {
						DEFAULT: "#667EEA",
						light: "#9F7AEA",
						dark: "#764BA2",
						deeper: "#5A4FCF"
					},
					accent: {
						blue: "#00E0FF",
						green: "#2ED573",
						orange: "#FF6B35",
						pink: "#FF6B9D"
					}
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'2xl': '1rem',
				'3xl': '1.5rem',
				'4xl': '2rem'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0', opacity: '0' },
					to: { height: 'var(--radix-accordion-content-height)', opacity: '1' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)', opacity: '1' },
					to: { height: '0', opacity: '0' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-12px)' },
				},
				'float-slow': {
					'0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
					'50%': { transform: 'translateY(-20px) rotate(2deg)' },
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '0.8',
						boxShadow: '0 0 20px rgba(0, 224, 255, 0.3)',
					},
					'50%': {
						opacity: '1',
						boxShadow: '0 0 40px rgba(0, 224, 255, 0.5)',
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
				'gradient-x': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-down': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-in-left': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(-30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'fade-in-right': {
					'0%': { 
						opacity: '0',
						transform: 'translateX(30px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.9)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)'
					}
				},
				'blur-in': {
					'0%': {
						opacity: '0',
						filter: 'blur(10px)'
					},
					'100%': {
						opacity: '1',
						filter: 'blur(0)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(100%)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-down': {
					'0%': {
						opacity: '0',
						transform: 'translateY(-100%)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'rotate-slow': {
					'0%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(360deg)' }
				},
				'morph': {
					'0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
					'50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' }
				},
				'ripple': {
					'0%': { transform: 'scale(0)', opacity: '1' },
					'100%': { transform: 'scale(4)', opacity: '0' }
				},
				'count-up': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.3s ease-out',
				'accordion-up': 'accordion-up 0.3s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'float-slow': 'float-slow 8s ease-in-out infinite',
				'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
				'shine': 'shine 8s linear infinite',
				'gradient-flow': 'gradient-flow 8s ease infinite',
				'gradient-x': 'gradient-x 6s ease infinite',
				'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
				'fade-in-down': 'fade-in-down 0.6s ease-out forwards',
				'fade-in-left': 'fade-in-left 0.6s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.6s ease-out forwards',
				'scale-in': 'scale-in 0.4s ease-out forwards',
				'blur-in': 'blur-in 0.5s ease-out forwards',
				'slide-up': 'slide-up 0.5s ease-out forwards',
				'slide-down': 'slide-down 0.5s ease-out forwards',
				'rotate-slow': 'rotate-slow 20s linear infinite',
				'morph': 'morph 8s ease-in-out infinite',
				'ripple': 'ripple 0.6s ease-out',
				'count-up': 'count-up 0.6s ease-out forwards'
			},
			boxShadow: {
				'inner-glow': 'inset 0 0 30px 0 rgba(0, 224, 255, 0.1)',
				'card-hover': '0 20px 60px rgba(0, 224, 255, 0.15)',
				'purple-glow': '0 0 40px rgba(102, 126, 234, 0.4)',
				'cyan-glow': '0 0 40px rgba(0, 224, 255, 0.4)',
				'glow-cyan': '0 0 30px rgba(0, 224, 255, 0.5)',
				'glow-purple': '0 0 30px rgba(102, 126, 234, 0.5)',
				'glow-mixed': '0 0 40px rgba(0, 224, 255, 0.3), 0 0 60px rgba(102, 126, 234, 0.2)',
				'glass': '0 8px 32px rgba(0, 0, 0, 0.4)',
				'glass-hover': '0 16px 48px rgba(0, 0, 0, 0.5), 0 0 40px rgba(0, 224, 255, 0.1)',
				'premium': '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
				'premium-lg': '0 35px 60px -15px rgba(0, 0, 0, 0.6)',
				'ambient': '0 0 80px rgba(0, 224, 255, 0.1), 0 0 160px rgba(102, 126, 234, 0.05)'
			},
			fontFamily: {
				inter: ['Inter', 'system-ui', 'sans-serif'],
				space: ['Space Grotesk', 'system-ui', 'sans-serif'],
				sans: ['Inter', 'system-ui', 'sans-serif']
			},
			backdropBlur: {
				xs: '2px',
				'3xl': '64px',
				'4xl': '80px'
			},
			transitionDuration: {
				'400': '400ms',
				'600': '600ms',
				'800': '800ms',
				'2000': '2000ms'
			},
			transitionTimingFunction: {
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'smooth-out': 'cubic-bezier(0, 0, 0.2, 1)'
			},
			spacing: {
				'18': '4.5rem',
				'22': '5.5rem',
				'30': '7.5rem'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
