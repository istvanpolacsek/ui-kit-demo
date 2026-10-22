import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverListFontPickerSectionSettings } from "./PopoverListFontPickerSectionSettings";
const meta = {
  title: "Overlay/Popover list / Font picker / Section settings",
  component: PopoverListFontPickerSectionSettings,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverListFontPickerSectionSettings>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "My fonts tab" } };
