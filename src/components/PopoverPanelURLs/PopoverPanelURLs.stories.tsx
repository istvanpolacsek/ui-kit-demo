import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelURLs } from "./PopoverPanelURLs";
const meta = {
  title: "Overlay/Popover panel / URLs",
  component: PopoverPanelURLs,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelURLs>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { property1: "Portfolio URL Trial" } };
