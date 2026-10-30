import type { Meta, StoryObj } from "@storybook/react-vite";
import { SidebarSub } from "./SidebarSub";
const meta = {
  title: "Overlay/Sidebar / Sub",
  component: SidebarSub,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof SidebarSub>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasMessage: false, type: "Font", tab: "Preset" },
};
