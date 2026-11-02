import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorSwatch } from "./ColorSwatch";
const meta = {
  title: "  ↳ Color/.Color Swatch",
  component: ColorSwatch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColorSwatch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { baseColorIndicator: false } };
