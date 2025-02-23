import { Platform } from "react-native";

const fontFamily = Platform.select({
  ios: "SF Pro Display",
  android: "Roboto",
});

export const typography = {
  fontFamily: "Inter",
  weights: {
    regular: "400",
    medium: "500",
    semiBold: "600",
    bold: "700",
  },
  sizes: {
    xs: 12,
    sm: 14,
    base: 16,
    lg: 18,
    xl: 20,
    "2xl": 24,
    "3xl": 30,
  },
};

export default fontFamily;
