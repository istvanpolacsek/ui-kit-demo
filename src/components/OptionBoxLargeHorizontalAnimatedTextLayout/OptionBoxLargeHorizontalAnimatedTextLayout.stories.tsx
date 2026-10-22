import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxLargeHorizontalAnimatedTextLayout } from "./OptionBoxLargeHorizontalAnimatedTextLayout";
const meta = {
  title: "Input/Option box / Large horizontal / Animated text layout",
  component: OptionBoxLargeHorizontalAnimatedTextLayout,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxLargeHorizontalAnimatedTextLayout>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showLabel: true, type: "Linear" } };
