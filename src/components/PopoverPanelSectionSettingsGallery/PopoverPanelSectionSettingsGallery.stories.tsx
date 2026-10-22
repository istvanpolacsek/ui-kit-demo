import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsGallery } from "./PopoverPanelSectionSettingsGallery";
const meta = {
  title: "Overlay/Popover panel / Section settings / Gallery",
  component: PopoverPanelSectionSettingsGallery,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsGallery>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { tab: "Images" } };
