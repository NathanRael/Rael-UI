import type { Preview } from "@storybook/react";
import "../src/index.css";
import {withThemeByDataAttribute} from "@storybook/addon-themes";
import {colors} from '../src/constants/index'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      values: [
        // 👇 Default values
        { name: 'Dark', value: colors.black },
        // { name: 'Light', value: '#F7F9F2' },
        { name: 'Light', value: '#FFFF' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Dark',
    },
    layout: 'centered'
  },
  globalTypes : {
    theme : {
      description: 'Global theme for components',
      toolbar: {
        // The label to show for this toolbar item
        title: 'Theme',
        icon: 'circlehollow',
        // Array of plain string values or MenuItem shape (see below)
        items: ['light', 'dark'],
        // Change title based on selected value
        dynamicTitle: true,
      },
    },
  },
  initialGlobals : {
    theme : 'light',
  }
};

/* snipped for brevity */

export const decorators = [
/*  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),*/
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'dark',
    attributeName: 'data-mode',
  }),
];


export default preview;
