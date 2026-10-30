import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationItemSocialIcon } from "./NavigationItemSocialIcon";
const meta = {
  title: "Module/Navigation item / Social icon",
  component: NavigationItemSocialIcon,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationItemSocialIcon>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { style: "Simple", type: "Icon" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
