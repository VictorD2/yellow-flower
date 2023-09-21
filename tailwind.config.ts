import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: "#225679",
      secondary: "#33435A",
      transparent: "transparent",
      background: "#eaf3f147",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      indigo: colors.indigo,
      red: colors.red,
      yellow: colors.yellow,
      green: colors.green,
      blue: colors.blue,
      rose: colors.rose,
      amber: colors.amber,
      cyan: colors.cyan,
      emerald: colors.emerald,
      fuchsia: colors.fuchsia,
      lime: colors.lime,
      orange: colors.orange,
      pink: colors.pink,
      purple: colors.purple,
      sky: colors.sky,
      slate: colors.slate,
      stone: colors.stone,
      teal: colors.teal,
      violet: colors.violet,
      zinc: colors.zinc,
    },
    extend: {},
  },
  plugins: [],
};
export default config;
