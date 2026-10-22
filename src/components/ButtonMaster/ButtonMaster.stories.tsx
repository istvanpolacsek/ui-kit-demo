import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonMaster } from "./ButtonMaster";
const meta = {
  title: "  ↳ Button 🆕/.Button_Master",
  component: ButtonMaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ButtonMaster>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    leftIcon: true,
    rightIcon: true,
    label: true,
    bTNValue: "Button",
    device: "Desktop",
    size: "Large",
  },
};
export const Selected: Story = { args: { ...Default.args, selected: true } };
