/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			height: {
				112: '32rem',
				126: '38rem'
			},
			spacing: {
				128: '32rem'
			},
			backgroundImage: {
				'hero-pattern':
					"linear-gradient(145deg, rgba(14 ,165, 233, 0.1) 0%, rgba(3, 105, 161, 1) 100%), url('/img/banner.jpg')",
				section:
					"linear-gradient(145deg, rgba(255,255,255, 0.3) 0%, rgba(255,255,255, 0.3) 100%), url('/img/background-2.svg')"
			}
		}
	},
	plugins: []
};
