import type { Meta, StoryObj } from "@storybook/react-vite";
import { TypePreviewOverflowStyle } from "./TypePreviewOverflowStyle";
const meta = {
  title: "Visual asset/Type preview / Overflow style",
  component: TypePreviewOverflowStyle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TypePreviewOverflowStyle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Full width" } };
