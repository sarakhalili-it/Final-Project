const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        navbar: "#121829CC",
        cardbg: "#20283ECC",
        gradiantbg1: "#362C9266",
        gradiantbg2: "#12629766",
        primary: {
          50: "#EBE9FE",
          100: "#DEDBFD",
          200: "#BEB7FB",
          300: "#9C92F8",
          400: "#7B6EF6",
          500: "#5A4AF4",
          600: "#483BC3",
          700: "#362C92",
          800: "#251E62",
          900: "#120F31",
        },
        success: {
          50: "#E1F9F2",
          100: "#CDF5E9",
          200: "#9BEBD3",
          300: "#69E2BD",
          400: "#37D8A7",
          500: "#05CE91",
          600: "#04A574",
          700: "#037C57",
          800: "#02523A",
          900: "#01291D",
        },
        secondary: {
          50: "#E4F4FF",
          100: "#D2ECFE",
          200: "#A5DBFE",
          300: "#78C8FD",
          400: "#4BB7FD",
          500: "#1EA5FC",
          600: "#1884CA",
          700: "#126297",
          800: "#0C4265",
          900: "#062032",
        },
        error: {
          50: "#FFECEC",
          100: "#FFDFDF",
          200: "#FFC0C0",
          300: "#FFA0A0",
          400: "#FF8181",
          500: "#FF6161",
          600: "#CC4E4E",
          700: "#993A3A",
          800: "#662727",
          900: "#331313",
        },
        tertary: {
          50: "#F6EDFF",
          100: "#F0E2FF",
          200: "#E2C5FF",
          300: "#D3A7FF",
          400: "#C58AFF",
          500: "#B66DFF",
          600: "#9257CC",
          700: "#6D4199",
          800: "#492C66",
          900: "#241633",
        },
        warning: {
          50: "#FFF5E9",
          100: "#FFEFDB",
          200: "#FFDEB6",
          300: "#FFCE92",
          400: "#FFBD6D",
          500: "#FFAD49",
          600: "#CC8A3A",
          700: "#99682C",
          800: "#66451D",
          900: "#33230F",
        },
        grey: {
          50: "#EBEEF5",
          100: "#C3C8D4",
          200: "#A8AEBF",
          300: "#8E95A9",
          400: "#767E94",
          500: "#61697F",
          600: "#475069",
          700: "#323B54",
          800: "#20283E",
          900: "#121829",
        },
        black: {
          10: "#0000001A",
          20: "#00000033",
          30: "#0000004D",
          40: "#00000066",
          50: "#00000080",
          65: "#000000A6",
          75: "#000000BF",
          100: "#000000",
        },
        white: {
          10: "#FFFFFF1A",
          20: "#FFFFFF33",
          30: "#FFFFFF4D",
          40: "#FFFFFF66",
          50: "#FFFFFF80",
          65: "#FFFFFFA6",
          75: "#FFFFFFBF",
          100: "#FFFFFF",
        },
      },
      fontFamily: {
        PoppinsRegular: ["PoppinsRegular", "sans-serif"],
        Vazir: ["Vazir", "sans-serif"],
      },
      lineHeight: {
        "leading-56px": "3.5rem",
        "leading-80px": "5rem",
      },
      width: {
        "24%": "23%",
      },
      fontSize: {
        "64px": "4rem",
        "32px": "2rem",
      },
      spacing: {
        "18px": "1.125rem",
        "480px": "30rem",
        "720px": "45rem",
        "1200px": "75rem",
        "max-w-8xl": "90rem",
        "90%": "90%",
      },
      borderRadius: {
        "40px": "2.5rem",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
