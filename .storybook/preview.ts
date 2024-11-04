import type { Preview } from "@storybook/react";
import "../src/index.css";

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
        { name: 'Dark', value: '#12161C' },
        // { name: 'Light', value: '#F7F9F2' },
        { name: 'Light', value: '#FFFF' },
      ],
      // 👇 Specify which background is shown by default
      default: 'Dark',
    },
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
      }
    }
  },
  initialGlobals : {
    theme : 'light'
  }
};

export default preview;
