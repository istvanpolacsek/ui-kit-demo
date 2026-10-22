import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorStyle } from "./ColorStyle";
const meta = {
  title: "Visual asset/Color style",
  component: ColorStyle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColorStyle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Solid", style: "Subtle" } };
