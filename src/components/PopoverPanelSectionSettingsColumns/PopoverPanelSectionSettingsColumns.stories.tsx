import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsColumns } from "./PopoverPanelSectionSettingsColumns";
const meta = {
  title: "Overlay/Popover panel / Section settings / Columns",
  component: PopoverPanelSectionSettingsColumns,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsColumns>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
export const Selected: Story = { args: { ...Default.args, selected: true } };
