// https://vercel.com/design/color

module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: {
          0: '#F6F6F6',
          100: '#fafafa',
          200: '#eaeaea',
          300: '#999999',
          400: '#888888',
          500: '#666666',
          600: '#444444',
          700: '#333333',
          800: '#222222',
          900: '#111111',
        },
        blue: {
          0: '#D3E5FF',
          100: '#3291FF',
          200: '#0070F3',
          300: '#0761D1',
        },
      },
      width: {
        40: '40vw',
        60: '60vw',
        95: '95vw',
      },
      maxWidth: {
        40: '40vw',
        60: '60vw',
        95: '95vw',
      },
      minWidth: {
        40: '40vw',
        60: '60vw',
        95: '95vw',
        500: '500px',
        iphone: '320px',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1700px',
      },
      boxShadow: {
        button: '0 4px 14px 0 rgb(0 118 255 / 39%)',
      },
    },
  },
  plugins: [],
}
