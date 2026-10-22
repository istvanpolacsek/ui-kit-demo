import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsNavigation } from "./PopoverPanelSectionSettingsNavigation";
const meta = {
  title: "Overlay/Popover panel / Section settings / Navigation",
  component: PopoverPanelSectionSettingsNavigation,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsNavigation>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { tab: "Layout simple" } };
