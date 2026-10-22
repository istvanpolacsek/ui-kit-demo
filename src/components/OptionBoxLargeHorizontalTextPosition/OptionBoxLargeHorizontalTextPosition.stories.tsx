import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxLargeHorizontalTextPosition } from "./OptionBoxLargeHorizontalTextPosition";
const meta = {
  title: "Input/Option box / Large horizontal / Text position",
  component: OptionBoxLargeHorizontalTextPosition,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxLargeHorizontalTextPosition>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showLabel: true, type: "Below" } };
