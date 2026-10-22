import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
const meta = {
  title: "  ↳ Button 🆕/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    iconOnly: { control: "select", options: ["False", "True"] },
    device: { control: "select", options: ["Desktop", "Mobile"] },
    size: { control: "select", options: ["Large", "Medium", "Small"] },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hierarchy: "Primary",
    state: "Default",
    type: "Default",
    leftIcon: true,
    rightIcon: true,
    label: true,
    bTNValue: "Button",
    iconOnly: "False",
    device: "Desktop",
    size: "Large",
  },
};
