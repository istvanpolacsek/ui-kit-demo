import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarMain } from "./SidebarMain";
const meta = {
  title: "Overlay/Sidebar / Main",
  component: SidebarMain,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SidebarMain>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Design", page: "Main" } };
