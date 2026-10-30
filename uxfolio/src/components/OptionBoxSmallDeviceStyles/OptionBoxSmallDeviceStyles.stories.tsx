import type { Meta, StoryObj } from "@storybook/react-vite";
import { OptionBoxSmallDeviceStyles } from "./OptionBoxSmallDeviceStyles";
const meta = {
  title: "Input/Option box / Small / Device styles",
  component: OptionBoxSmallDeviceStyles,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof OptionBoxSmallDeviceStyles>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "None" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
