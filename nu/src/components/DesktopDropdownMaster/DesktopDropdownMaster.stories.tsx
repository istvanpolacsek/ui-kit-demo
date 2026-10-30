import type { Meta, StoryObj } from "@storybook/react-vite";
import { DesktopDropdownMaster } from "./DesktopDropdownMaster";
const meta = {
  title: "  ↳ Dropdown/.Desktop-Dropdown/Master",
  component: DesktopDropdownMaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DesktopDropdownMaster>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showOptions: true, showHelperText: true, showLabel: true },
};
