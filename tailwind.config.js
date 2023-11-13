module.exports = {
  mode: 'jit',
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: {
          DEFAULT: '#D05790',
          dark: {
            10: '#bb4e82',
            20: '#a64673',
            30: '#923d65',
            40: '#7d3456',
            50: '#682c48',
            60: '#53233a',
            70: '#3e1a2b',
            80: '#2a111d'
          },
          light: {
            10: '#d5689b',
            20: '#d979a6',
            30: '#de89b1',
            40: '#e39abc',
            50: '#e8abc8',
            60: '#ecbcd3',
            70: '#f1cdde',
            80: '#f6dde9'
          }
        },
        light: {
          shade: '#EAE8DE',
          accent: '#B7E3E2'
        },
        dark: {
          shade: '#17182C',
          accent: '#647AAC'
        },
        success: '#759363',
        warning: '#f2832b',
        danger: '#f44336'
      },
      height: {
        '520px': '520px',
        '360px': '360px'
      }
    },
    fontFamily: {
      noto: 'Noto Sans',
      ubuntu: 'Ubuntu'
    }
  },
  variants: {
    extend: {
      backgroundColor: ['checked'],
      borderColor: ['checked'],
      margin: ['last']
    }
  },
  plugins: [
  ]
}
