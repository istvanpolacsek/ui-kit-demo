import type { Meta, StoryObj } from "@storybook/react-vite";
import { BentoItem } from "./BentoItem";
const meta = {
  title: "Panel/Bento item",
  component: BentoItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof BentoItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasVisual: true, needsInfo: true, type: "Value" },
};
