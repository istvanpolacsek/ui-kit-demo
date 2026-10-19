import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonDanger } from "./ButtonDanger";
import { iconNameOptions } from "../Icon/Icon.options";
const meta = {
  title: "Buttons/Button Danger",
  component: ButtonDanger,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: {
    iconEnd: { control: "select", options: iconNameOptions },
    iconStart: { control: "select", options: iconNameOptions },
  },
} satisfies Meta<typeof ButtonDanger>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    label: "Button",
    iconEnd: "X",
    hasIconEnd: false,
    hasIconStart: false,
    iconStart: "Star",
    variant: "Primary",
    size: "Medium",
  },
};
