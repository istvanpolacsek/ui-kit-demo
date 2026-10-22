import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorSwatch } from "./ColorSwatch";
const meta = {
  title: "Visual asset/Color swatch",
  component: ColorSwatch,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColorSwatch>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Preview", empty: "False" } };
