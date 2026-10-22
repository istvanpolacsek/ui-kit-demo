import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuItemSettingsSidebar } from "./MenuItemSettingsSidebar";
const meta = {
  title: "Panel/Menu item / Settings sidebar",
  component: MenuItemSettingsSidebar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MenuItemSettingsSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Navigation" } };
