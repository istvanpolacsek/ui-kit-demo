import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorPickerEmbedded } from "./ColorPickerEmbedded";
const meta = {
  title: "Panel/Color picker / Embedded",
  component: ColorPickerEmbedded,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColorPickerEmbedded>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "HEX" } };
