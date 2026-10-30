import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallImageShape } from "./OptionBoxSmallImageShape";
const meta = {
  title: "Input/Option box / Small / Image shape",
  component: OptionBoxSmallImageShape,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallImageShape>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Sharp" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
