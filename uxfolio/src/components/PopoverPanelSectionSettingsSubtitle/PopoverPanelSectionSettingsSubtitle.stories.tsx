import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsSubtitle } from "./PopoverPanelSectionSettingsSubtitle";
const meta = {
  title: "Overlay/Popover panel / Section settings / Subtitle",
  component: PopoverPanelSectionSettingsSubtitle,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsSubtitle>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { tab: "Default" } };
