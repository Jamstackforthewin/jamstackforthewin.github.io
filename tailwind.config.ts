
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
				jam: {
					50: '#f7f7f8',
					100: '#eeeef0',
					200: '#d8d8dd',
					300: '#b6b7be',
					400: '#8e909a',
					500: '#717280',
					600: '#5b5c69',
					700: '#4a4a56',
					800: '#414149',
					900: '#38383e',
					950: '#242428',
				},
				accent1: '#0EA5E9',
				accent2: '#3b82f6',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
				'fade-up': {
					from: { 
						opacity: '0',
						transform: 'translateY(20px)',
					},
					to: { 
						opacity: '1',
						transform: 'translateY(0)',
					},
				},
				'scale-in': {
					from: { 
						opacity: '0',
						transform: 'scale(0.95)',
					},
					to: { 
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				'slide-in-right': {
					from: { 
						transform: 'translateX(30px)',
						opacity: '0',
					},
					to: { 
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				'slide-in-left': {
					from: { 
						transform: 'translateX(-30px)',
						opacity: '0',
					},
					to: { 
						transform: 'translateX(0)',
						opacity: '1',
					},
				},
				float: {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.7s ease-out',
				'fade-up': 'fade-up 0.7s ease-out',
				'scale-in': 'scale-in 0.7s ease-out',
				'slide-in-right': 'slide-in-right 0.7s ease-out',
				'slide-in-left': 'slide-in-left 0.7s ease-out',
				'float': 'float 6s ease-in-out infinite',
			},
			fontFamily: {
				'mono': ['"JetBrains Mono"', '"Space Mono"', 'monospace'],
			},
			backdropFilter: {
				'none': 'none',
				'blur': 'blur(8px)',
			},
			boxShadow: {
				'soft': '0 10px 25px -3px rgba(0, 0, 0, 0.05)',
				'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
			},
		},
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
