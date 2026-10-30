import type { Meta, StoryObj } from "@storybook/react-vite";
import { ListItemSocialMediaIcons } from "./ListItemSocialMediaIcons";
const meta = {
  title: "Panel/List item / Social media icons",
  component: ListItemSocialMediaIcons,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ListItemSocialMediaIcons>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
