import '../src/styles/globals.css';

/**
 * To control the way stories are rendered and add global decorators and parameters,
 * create a .storybook/preview.js file. This is loaded in the Canvas tab, the “preview” iframe
 * that renders your components in isolation. Use preview.js for global code
 * (such as CSS imports or JavaScript mocks) that applies to all stories.
 * The `preview.ts` can be an ES module and export following keys
 * decorators - an array of global decorators
 * parameters - an object of global parameters
 * globalTypes - definition of globalTypes
 */

const BREAKPOINTS_INT = {
  sm: 480,
  md: 768,
  lg: 976,
  xl: 1440,
};

const customViewports = Object.fromEntries(
  Object.entries(BREAKPOINTS_INT).map(([key, val], idx) => {
    return [
      key,
      {
        name: key,
        styles: {
          width: `${val}px`,
          height: `${(idx + 5) * 10}vh`,
        },
      },
    ];
  })
);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: { viewports: customViewports },
}
