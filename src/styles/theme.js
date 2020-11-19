//Theme

const theme = {
  animation: {
    transition: "all 500ms ease",
  },
  shadow: {
    top: "0 -4px 8px -4px rgb(216, 216, 216)",
    bottom: "2px 2px 2px rgba(0, 0, 0, 0.2)",
    sm: "0px 2px 4px 0px rgba(0, 0, 0, 0.2);",
    md: "1px 6px 15px 0 rgba(155, 155, 155, 0.4)",
    lg: "0px 4px 10px 0px rgba(0,0,0,0.3)",
  },

  button: {
    radius: "4px",
    shadow: "",
  },

  font: {
    primary: `'HK Grotesk Normal`,
    secondary: `HK Grotesk Medium`,
    light: `'HK Grotesk Light'`,
    normal: `'HK Grotesk Normal'`,
    medium: `'HK Grotesk Medium'`,
    semibold: `'HK Grotesk Semibold'`,
    bold: `'HK Grotesk Bold'`,
    extrabold: `'HK Grotesk Extra Bold'`,
  },

  font_size: {
    xxxsmall: "font-size: 12px;",
    xxsmall: "font-size: 14px;",
    xsmall: "font-size: 16px;",
    small: "font-size: 17px;",
    regular: "font-size: 22px; line-height: 30px;",
    large: "font-size: 28px; line-height: 30px;",
    larger: "font-size: 40px; line-height: 50px;",
    xlarge: "font-size: 48px; line-height: 48px;",
  },

  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "40px",
    xxl: "60px",
  },

  fontWeight: {
    w3: "300",
    w4: "400",
    w5: "500",
    w6: "600",
    w7: "700",
  },
  color: {
    primary: "#071435",
    primary2: "#F2BB63",
    secondary: "#F94C43",
    tertiary: "#098c8c",
    accent: "#cca86e",
    gray: "#5A535E",
    background: {
      white: "#ffffff",
      light: "#f8f8f8",
    },
    white: {
      regular: "#ffffff",
      lessdark: "#faf9f8",
      dark: "#f6f6f6",
      darker: "#eeeeee",
    },
    black: {
      lightest: "#ABA8AF",
      light: "#564F62",
      regular: "#071435",
    },
  },

  screen: {
    xs: "575px",
    sm: "767px",
    md: "991px",
    lg: "1199px",
  },
}

export default theme
