import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuItem } from "./MenuItem";
import { iconNameOptions } from "../Icon/Icon.options";
const meta = {
  title: "Menu/Menu Item",
  component: MenuItem,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { icon: { control: "select", options: iconNameOptions } },
} satisfies Meta<typeof MenuItem>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    hasDescription: true,
    hasIcon: true,
    icon: "Star",
    hasShortcut: true,
    label: "Menu Label",
    description: "Menu description.",
  },
};
