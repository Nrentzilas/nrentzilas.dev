/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
    	extend: {
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		colors: {
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))',
                    light: '#f8f9fa',
                    dark: '#070e12',
					darkish: '#0c1a20'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		keyframes: {
    			orbit: {
    				'0%': {
    					transform: 'rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)'
    				},
    				'100%': {
    					transform: 'rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)'
    				}
    			},
				wave: {
					'0%': { transform: 'rotate(0deg)' },
					'10%': { transform: 'rotate(-10deg)' },
					'20%': { transform: 'rotate(10deg)' },
					'30%': { transform: 'rotate(-8deg)' },
					'40%': { transform: 'rotate(8deg)' },
					'50%': { transform: 'rotate(-5deg)' },
					'60%': { transform: 'rotate(5deg)' },
					'70%': { transform: 'rotate(-3deg)' },
					'80%': { transform: 'rotate(3deg)' },
					'90%': { transform: 'rotate(0deg)' },
					'100%': { transform: 'rotate(0deg)' },
				  },
    		},
    		animation: {
    			orbit: 'orbit calc(var(--duration)*1s) linear infinite',
				wave: 'wave 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite',
    		}
    	}
    },
	plugins: [require("tailwindcss-animate")],
}
