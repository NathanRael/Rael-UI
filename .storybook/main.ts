import type { StorybookConfig } from "@storybook/react-vite";
import path from "path"
import {mergeConfig} from "vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
      
    // For tailwind darkMode
    'storybook-tailwind-dark-mode'
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {
      
    },
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src')
        }
      }
    });
  }
  /*viteFinal : async (config) => {
    config.plugins?.push(
        tsconfigPaths({
          projects : [path.resolve(path.dirname(__dirname), "tsconfig.json")],
        })
    )
    
    return config
  }*/
  
};
export default config;
