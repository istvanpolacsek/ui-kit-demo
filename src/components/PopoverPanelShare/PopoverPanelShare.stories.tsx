import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelShare } from "./PopoverPanelShare";
const meta = {
  title: "Overlay/Popover panel / Share",
  component: PopoverPanelShare,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelShare>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { property1: "Share portfolio Trial" } };
