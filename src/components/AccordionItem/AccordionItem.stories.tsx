import type { Meta, StoryObj } from "@storybook/react-vite";
import { AccordionItem } from "./AccordionItem";
const meta = {
  title: "Accordion/Accordion Item",
  component: AccordionItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof AccordionItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    title: "Title",
    content:
      "Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.",
  },
};
export const Open: Story = { args: { ...Default.args, defaultOpen: true } };
