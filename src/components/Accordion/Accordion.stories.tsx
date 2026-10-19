import type { Meta, StoryObj } from "@storybook/react-vite";
import { Accordion } from "./Accordion";
const meta = {
  title: "Accordion/Accordion",
  component: Accordion,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Accordion>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    items: [
      {
        content:
          "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
        title: "Title",
        value: "1",
      },
      {
        content:
          "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
        title: "Title",
        value: "2",
      },
      {
        content:
          "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
        title: "Title",
        value: "3",
      },
      {
        content:
          "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
        title: "Title",
        value: "4",
      },
      {
        content:
          "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
        title: "Title",
        value: "5",
      },
    ],
    defaultValue: ["1"],
  },
};
