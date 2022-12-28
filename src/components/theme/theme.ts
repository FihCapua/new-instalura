import { typographyVariants } from "./typographyVariants";

export const theme = {
  colors: {
    primaryColor: "#FFFFFF",
    mainColor: "#F2F2F2",
    darkColor: "#000000",
    lightColor: "#88989E",
    primaryText: "#D7385E",
    secondaryText: "#FB7B6B",
    tertiaryText: "#070C0E",
    darkText: "#4d4d4d",
    border: "#F1F1F1",
  },
  borderRadius: "12px",
  transition: "200ms ease-in-out",
  font: {
    family: {
      default: "'Rubik', sans-serif",
      secondary: "'Roboto', sans-serif",
    },
  },
  breakpoints: {
    xs: 0,
    sm: 480,
    md: 768,
    lg: 992,
    xl: 1200,
  },
  typography: typographyVariants,
} as const;
