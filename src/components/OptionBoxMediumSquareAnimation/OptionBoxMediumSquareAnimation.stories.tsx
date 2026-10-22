import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxMediumSquareAnimation } from "./OptionBoxMediumSquareAnimation";
const meta = {
  title: "Input/Option box / Medium square / Animation",
  component: OptionBoxMediumSquareAnimation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxMediumSquareAnimation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { showLabel: true, type: "None" } };
