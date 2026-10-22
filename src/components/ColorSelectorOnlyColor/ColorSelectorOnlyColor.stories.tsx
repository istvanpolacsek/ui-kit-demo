import type { Meta, StoryObj } from "@storybook/react-vite";
import { ColorSelectorOnlyColor } from "./ColorSelectorOnlyColor";
const meta = {
  title: "Input/Color selector / Only color",
  component: ColorSelectorOnlyColor,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ColorSelectorOnlyColor>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
