/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
		screens: {
			'wider' : '410px',
		},
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
  				foreground: 'hsl(var(--primary-foreground))'
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
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			},
			fadeInUp: {
				'0%':{
					opacity: '0',
					transform: 'translateY(20px)'
				},
				'100%':{
					opacity: '1',
					transform: 'translateY(0)'
				}
			},
			slideUp: {
				'0%': {
					opacity: '0',
					transform: 'translateY(100px)',
				},
				'100%': {
					opacity: '1',
					transform: 'translateY(0)',
				}
			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
			'fadeInUp': 'fadeInUp 0.7s ease-out forwards',
			'slideUp': 'slideUp 0.3s ease-out 1s forwards'
  		},
		fontFamily: {
			'body-S': ['Pretendard-Regular', 'sans-serif'],
			'body-M': ['Pretendard-Regular', 'sans-serif'],
			'body-L': ['Pretendard-Regular', 'sans-serif'],
			'title-XS': ['Pretendard-Bold', 'sans-serif'],
			'title-S': ['Pretendard-Bold', 'sans-serif'],
			'title-M': ['Pretendard-Bold', 'sans-serif'],
			'title-L': ['Pretendard-Bold', 'sans-serif'],
			'heading-S': ['Pretendard-Bold', 'sans-serif'],
			'heading-M': ['Pretendard-Bold', 'sans-serif'],
			'heading-L': ['Pretendard-Bold', 'sans-serif'],
		},
		fontSize: {
			'body-S': '12px',
			'body-M': '14px',
			'body-L': '16px',
			'title-XS': '16px',
			'title-S': '20px',
			'title-M': '24px',
			'title-L': '28px',
			'heading-S': '32px',
			'heading-M': '36px',
			'heading-L': '40px',
		},
		colors: {
			'bc-blue': '#3348CB',
			'bc-orange-1': '#F6922E',
			'bc-orange-2': '#E87D12',
			'bc-white': '#F8F8F8',
			'bc-grey-1': '#B2B1B1',
			'bc-grey-2': '#828282',
			'bc-grey-3': '#242323',
			'bc-black': '#000000',
			'bc-white45': 'rgba(248, 248, 248, 0.45)',
			'bc-white25': 'rgba(248, 248, 248, 0.25)',
			'bc-strokeGrey': 'rgba(248, 248, 248, 0.60)',
			'bc-lineGrey': '#39393C',
		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}