import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsGeneral } from "./PopoverPanelSectionSettingsGeneral";
const meta = {
  title: "Overlay/Popover panel / Section settings / General",
  component: PopoverPanelSectionSettingsGeneral,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsGeneral>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { modules: "One" } };
