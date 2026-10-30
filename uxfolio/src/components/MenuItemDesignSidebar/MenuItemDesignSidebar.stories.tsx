import type { Meta, StoryObj } from "@storybook/react-vite";
import { MenuItemDesignSidebar } from "./MenuItemDesignSidebar";
const meta = {
  title: "Panel/Menu item / Design sidebar",
  component: MenuItemDesignSidebar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MenuItemDesignSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Template" } };
