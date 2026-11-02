import type { Preview } from "@storybook/react-vite";
import ThemeDecorator from "./ThemeDecorator";
import { parameters as themeParameters } from "./ThemeDecorator";

const preview: Preview = {
  parameters: {
    ...themeParameters,
    options: {
      storySort: {
        order: [
          "Guidelines",
          [
            "Introduction",
            "Using tokens",
            "Theming",
            "Component conventions",
            "Figma annotations",
          ],
          "Foundations",
          [
            "Colors",
            "Typography",
            "Spacing",
            "Radius",
            "Sizes",
            "Other tokens",
          ],
          "*",
        ],
      },
    },
  },
  decorators: [ThemeDecorator],
};

export default preview;
