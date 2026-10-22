import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelSectionSettingsFooter } from "./PopoverPanelSectionSettingsFooter";
const meta = {
  title: "Overlay/Popover panel / Section settings / Footer",
  component: PopoverPanelSectionSettingsFooter,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelSectionSettingsFooter>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Portfolio" } };
