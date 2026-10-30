import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavigationSocialIcons } from "./NavigationSocialIcons";
const meta = {
  title: "Section/Navigation / Social icons",
  component: NavigationSocialIcons,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof NavigationSocialIcons>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { hasPage4: false, type: "Icon" } };
export const Disabled: Story = { args: { ...Default.args, disabled: true } };
