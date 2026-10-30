import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorSelector } from "./ColorSelector";
const meta = {
  title: "Input/Color selector",
  component: ColorSelector,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColorSelector>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Solid" } };
