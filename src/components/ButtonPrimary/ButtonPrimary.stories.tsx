import type { Meta, StoryObj } from "@storybook/react-vite";
import { ButtonPrimary } from "./ButtonPrimary";
import { iconIconNameOptions } from "../Icon/Icon.options";
const meta = {
  title: "Design System/Button / Primary",
  component: ButtonPrimary,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
  argTypes: { iconName: { control: "select", options: iconIconNameOptions } },
} satisfies Meta<typeof ButtonPrimary>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    text: "Button",
    hasIcon: true,
    hasText: true,
    mode: "Light",
    size: "L",
    iconName: "mail",
  },
};
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
