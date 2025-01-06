/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#f5f7f6',
					100: '#e1e7e4',
					200: '#c5d1cb',
					300: '#a3b5ac',
					400: '#87968e',
					500: '#687971',
					600: '#4f5d56',
					700: '#3f4a44',
					800: '#2f3632',
					900: '#1f2321',
					950: '#0f1110'
				},
				sage: {
					50: '#f6f7f6',
					100: '#e3e6e3',
					200: '#c7cdc6',
					300: '#a5afa3',
					400: '#87967f',
					500: '#687d5f',
					600: '#4f614a',
					700: '#3f4d3b',
					800: '#2f392c',
					900: '#1f251d',
					950: '#0f120e'
				},
				cream: {
					50: '#fdfcfb',
					100: '#f7f3ef',
					200: '#efe5d9',
					300: '#e2cfb8',
					400: '#d4b696',
					500: '#c69c74',
					600: '#b88355',
					700: '#a06c45',
					800: '#7d543a',
					900: '#5a3d2a',
					950: '#2d1f15'
				}
			},
			fontFamily: {
				sans: ['Montserrat', 'sans-serif'],
				serif: ['Cormorant Garamond', 'serif'],
			},
			boxShadow: {
				'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
				'warm': '0 2px 15px rgba(166, 135, 107, 0.1)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'texture-light': 'url("/textures/light-paper.png")',
				'texture-dark': 'url("/textures/dark-paper.png")',
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'rgb(var(--color-gray-700))',
						h1: {
							fontFamily: 'Cormorant Garamond, serif',
							fontWeight: '300',
							letterSpacing: '0.05em',
						},
						h2: {
							fontFamily: 'Cormorant Garamond, serif',
							fontWeight: '300',
							letterSpacing: '0.05em',
						},
						h3: {
							fontFamily: 'Cormorant Garamond, serif',
							fontWeight: '300',
							letterSpacing: '0.05em',
						},
					},
				},
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
