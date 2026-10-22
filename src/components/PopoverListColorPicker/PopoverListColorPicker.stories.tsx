import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverListColorPicker } from "./PopoverListColorPicker";
const meta = {
  title: "Overlay/Popover list / Color picker",
  component: PopoverListColorPicker,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverListColorPicker>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { tab: "Palette" } };
