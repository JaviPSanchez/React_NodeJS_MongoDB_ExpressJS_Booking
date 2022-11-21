module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./src/sections/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#003580",
        primaryLight: "#0071c2",
        secondary: "#EEF1F6",
        tertiary: "#0e1133",
        green: "#008009",
        greyLight: "#ebf3ff",
        grey: "#555555",
        blackCustom: "rgba(0, 0, 0, 0.613)",

        yellow: "#febb02",

        lightBlue: "#E1F6FE",
        lightPink: "#FDEEDC",
        lightGreen: "#E1FDE2",
      },
      lineHeight: {
        12: "1.2",
        13: "1.3",
        16: "1.6",
      },
    },
    screens: {
      lg: { max: "1800px" },
      md: { max: "990px" },
      sm: { max: "600px" },
      xs: { max: "400px" },
      minmd: "1700px",
      minlg: "2100px",
    },
    fontFamily: {
      IBMPlex: ["IBM Plex Sans", "sans-serif"],
    },
  },
  plugins: [],
};
