import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsHero } from "./PopoverPanelSectionSettingsHero";
const meta = {
  title: "Overlay/Popover panel / Section settings / Hero",
  component: PopoverPanelSectionSettingsHero,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsHero>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Modular" } };
