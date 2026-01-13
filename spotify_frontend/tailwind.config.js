module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // here we can add custom classes of css in Tailwind
      backgroundColor:{
      "spotify-green" : "rgb(30, 215, 96)",
      "navbar-black":"rgb(18,18,18)",
      },
      SVGLinearGradientElement:
      {
        "navbar-black":"rgb(18,18,18)",
      },
      fontFamily:{
        "poppins":["Poppins","sans-serif"],
      },
      height:{
        "1/10":"10%",
        "9/10":"90%", 
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
