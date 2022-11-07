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
					"linear-gradient(145deg, rgba(255, 65, 88, 0.3) 0%, rgba(202, 231, 234, 1) 100%), url('/img/banner.jpg')"
			}
		}
	},
	plugins: []
};
