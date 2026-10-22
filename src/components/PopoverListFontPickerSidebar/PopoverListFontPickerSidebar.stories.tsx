import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverListFontPickerSidebar } from "./PopoverListFontPickerSidebar";
const meta = {
  title: "Overlay/Popover list / Font picker / Sidebar",
  component: PopoverListFontPickerSidebar,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverListFontPickerSidebar>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
