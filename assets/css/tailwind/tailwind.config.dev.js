/** @type {import('tailwindcss').Config} */
const themeDir = __dirname + '/../../../';
console.log(themeDir)
module.exports = {
  content: [
  	`${themeDir}/layouts/**/*.html`,
  	`${themeDir}/content/**/*.md`,
  ],
  theme: {
    extend: {
      // typography: (theme) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme('colors.white'), // Set the default text color to white
      //     },
      //   },
      // }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
  corePlugins: {
    preflight: true,
  },
  safelist: [
  	{
    	pattern: /.*/,
  	},
    'top-0',
    'max-lg:top-0',
    'lg:w-8/12',
    'lg:w-9/12',
    'lg:w-10/12',
    'xl:w-8/12',
    'xl:w-9/12',
    'xl:w-10/12',
  ]
}

