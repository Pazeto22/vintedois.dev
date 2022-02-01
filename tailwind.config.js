/* eslint-disable */

const addPseudoElements = (pattern, suffixes) => [
  pattern,
  ...suffixes.map((suffix) => `${pattern}::${suffix}`),
];

const addPseudoClasses = (pattern, prefixes) => [
  pattern,
  ...prefixes.map((prefix) => `${prefix}:${pattern}`),
];

const handleBreakpoints = (valueIn, consumer) => {
  if (valueIn == null) {
    return;
  }

  if (typeof valueIn !== "object" || !("DEFAULT" in valueIn)) {
    return consumer?.(valueIn) || valueIn;
  }

  return {
    ...(consumer?.(valueIn.DEFAULT) || valueIn.DEFAULT),
    ...Object.fromEntries(
      Object.entries(valueIn)
        .filter(([key]) => key !== "DEFAULT")
        .map(([key, value]) => [`@screen ${key}`, consumer?.(value) || value])
    ),
  };
};

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./safelist.txt",
  ],
  theme: require("./tailwind.theme"),
  corePlugins: {
    container: false,
  },
  plugins: [
    ({ addComponents, theme }) => {
      const styleName = "typography";

      addComponents(
        Object.entries(theme(styleName)).map(([key, value]) => ({
          [`.${styleName}-${key}`]: handleBreakpoints(value),
        }))
      );
    },
    ({ addComponents, theme }) => {
      const styleName = "container";

      addComponents({
        [`.${styleName}`]: {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          ...handleBreakpoints(theme(styleName), ({ maxWidth, padding }) => ({
            maxWidth,
            paddingLeft: padding,
            paddingRight: padding,
          })),
        },
        [`.-ml-${styleName}`]: handleBreakpoints(
          theme(styleName),
          ({ padding }) => ({
            marginLeft: `calc(${padding} * -1)`,
          })
        ),
        [`.-mr-${styleName}`]: handleBreakpoints(
          theme(styleName),
          ({ padding }) => ({
            marginRight: `calc(${padding} * -1)`,
          })
        ),
        [`.-mx-${styleName}`]: handleBreakpoints(
          theme(styleName),
          ({ padding }) => ({
            marginLeft: `calc(${padding} * -1)`,
            marginRight: `calc(${padding} * -1)`,
          })
        ),
        [`.pl-${styleName}`]: handleBreakpoints(
          theme(styleName),
          ({ padding }) => ({
            paddingLeft: padding,
          })
        ),
        [`.pr-${styleName}`]: handleBreakpoints(
          theme(styleName),
          ({ padding }) => ({
            paddingRight: padding,
          })
        ),
        [`.px-${styleName}`]: handleBreakpoints(
          theme(styleName),
          ({ padding }) => ({
            paddingLeft: padding,
            paddingRight: padding,
          })
        ),
      });
    },
    require("@tailwindcss/line-clamp"),
    require("tailwind-safelist-generator")({
      path: "safelist.txt",
      patterns: [
        ...addPseudoClasses("text-{colors}", []),
        ...addPseudoClasses("bg-{colors}", []),
        ...addPseudoClasses("border-{colors}", []),
        ...addPseudoClasses("ring-{colors}", []),
      ],
    }),
  ],
};
