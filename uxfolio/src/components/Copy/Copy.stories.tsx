import type { Meta, StoryObj } from "@storybook/react-vite";
import { Copy } from "./Copy";
const meta = {
  title: "Visual asset/Copy",
  component: Copy,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Copy>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
