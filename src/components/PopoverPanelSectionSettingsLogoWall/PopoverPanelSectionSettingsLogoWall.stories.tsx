import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsLogoWall } from "./PopoverPanelSectionSettingsLogoWall";
const meta = {
  title: "Overlay/Popover panel / Section settings / Logo wall",
  component: PopoverPanelSectionSettingsLogoWall,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsLogoWall>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { colors: "Original" } };
