module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        hacerGirar0: 'rotar 4s infinite linear',
        hacerGirar1: 'rotar 2s infinite linear',
      },
      keyframes: {
        rotar:{
          '0%': { transform: 'rotate(0)'},
          '100%':{ transform: 'rotate(360deg)'},
        },
    },
    
      colors:{
        colorPrimario: '#F1FAEE',
        colorSecundario1: '#FCA311',
        colorSecundario2:'#f5dd90',
        colorTerciario1: '#E63946',
        colorTerciario2:'#ffadad',
      },
      fontFamily:{
        fuenteBase:['Roboto Mono', 'monospace'],
        fuenteTitulo:['Kavoon'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
