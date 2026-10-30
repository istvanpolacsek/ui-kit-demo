import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPickerDefault } from "./ColorPickerDefault";
const meta = {
  title: "Panel/Color picker / Default",
  component: ColorPickerDefault,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColorPickerDefault>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "HEX" } };
