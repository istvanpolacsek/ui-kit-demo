import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsDividerLine } from "./PopoverPanelSectionSettingsDividerLine";
const meta = {
  title: "Overlay/Popover panel / Section settings / Divider line",
  component: PopoverPanelSectionSettingsDividerLine,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsDividerLine>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { colors: "Original" } };
