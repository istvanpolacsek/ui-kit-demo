import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarCascading } from "./SidebarCascading";
const meta = {
  title: "Overlay/Sidebar / Cascading",
  component: SidebarCascading,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SidebarCascading>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Advanced font" } };
