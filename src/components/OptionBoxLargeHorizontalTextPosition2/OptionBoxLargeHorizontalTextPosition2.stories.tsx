import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxLargeHorizontalTextPosition2 } from "./OptionBoxLargeHorizontalTextPosition2";
const meta = {
  title: "Input/Option box / Large horizontal / Text position 2",
  component: OptionBoxLargeHorizontalTextPosition2,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxLargeHorizontalTextPosition2>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showLabel: true, type: "Horizontal" } };
