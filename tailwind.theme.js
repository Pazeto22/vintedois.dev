/* eslint-disable */

const withVariableOpacity =
  (variable) =>
  ({ opacityValue, opacityVariable }) => {
    if (opacityValue != null) {
      return `rgba(var(${variable}), ${opacityValue})`;
    }

    if (opacityVariable != null) {
      return `rgba(var(${variable}), var(${opacityVariable}, 1))`;
    }

    return `rgb(var(${variable}))`;
  };

module.exports = {
  zIndex: {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    auto: "auto",
  },
  opacity: {
    0: "0",
    5: "0.05",
    10: "0.10",
    15: "0.15",
    20: "0.20",
    25: "0.25",
    30: "0.30",
    35: "0.35",
    40: "0.40",
    45: "0.45",
    50: "0.50",
    55: "0.55",
    60: "0.60",
    65: "0.65",
    70: "0.70",
    75: "0.75",
    80: "0.80",
    85: "0.85",
    90: "0.90",
    95: "0.95",
    100: "1",
  },
  screens: {
    xls: "360px",
    xs: "480px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1200px",
    xxl: "1400px",
  },
  spacing: {
    0: "0px",
    1: "1px",
    ...Object.fromEntries(
      Array(256)
        .fill()
        .map((_, i) => [(i + 1) * 4, `${((i + 1) * 4) / 16}rem`])
    ),
  },
  typography: {
    h1: {
      DEFAULT: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "24px",
        lineHeight: "28px",
      },
      lg: {
        fontSize: "32px",
        lineHeight: "40px",
      },
    },
    h2: {
      DEFAULT: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: "20px",
        lineHeight: "24px",
      },
      lg: {
        fontSize: "28px",
        lineHeight: "32px",
      },
    },
    h3: {
      DEFAULT: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "24px",
      },
      lg: {
        fontSize: "24px",
        lineHeight: "28px",
      },
    },
    h4: {
      DEFAULT: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "500",
        fontSize: "16px",
        lineHeight: "20px",
      },
      lg: {
        fontSize: "18px",
        lineHeight: "24px",
      },
    },
    "body-lg": {
      DEFAULT: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "14px",
        lineHeight: "16px",
      },
      lg: {
        fontSize: "16px",
        lineHeight: "20px",
      },
    },
    "body-md": {
      DEFAULT: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "12px",
        lineHeight: "16px",
      },
      lg: {
        fontSize: "14px",
        lineHeight: "20px",
      },
    },
    "body-sm": {
      DEFAULT: {
        fontFamily: "Poppins",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "10px",
        lineHeight: "12px",
      },
      lg: {
        fontSize: "12px",
        lineHeight: "16px",
      },
    },
  },
  container: {
    DEFAULT: {
      maxWidth: 952,
      padding: "1rem",
    },
    "layout-md": {
      maxWidth: 984,
      padding: "2rem",
    },
  },
  colors: {
    white: "#fff",
    black: "#000",
    transparent: "transparent",
    current: "currentColor",
  },
  extend: {
    maxWidth: (theme) => theme("width"),
    maxHeight: (theme) => theme("height"),
    minWidth: (theme) => theme("width"),
    minHeight: (theme) => theme("height"),
    padding: {
      full: "100%",
    },
    colors: {
      gray: {
        50: "#F4F4FB",
        100: "#DCDCDC",
        150: "#C4C4C4",
        200: "#818181",
      },
      // text-primary
      // text-primary-shazam
      primary: {
        DEFAULT: "#fff",
        shazam: "#000",
      },
    },
    boxShadow: {
      md: "15px 0px 35px -25px rgba(10, 10, 10, 0.1)",
      mdi: "-15px 0px 35px -25px rgba(10, 10, 10, 0.1)",
      lg: "0px 20px 35px -25px rgba(10, 10, 10, 0.2)",
    },
  },
};
