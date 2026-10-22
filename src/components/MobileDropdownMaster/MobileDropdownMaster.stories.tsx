import type { Meta, StoryObj } from "@storybook/react-vite";
import { MobileDropdownMaster } from "./MobileDropdownMaster";
const meta = {
  title: "  ↳ Dropdown 🆕/.Mobile-dropdown/Master",
  component: MobileDropdownMaster,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof MobileDropdownMaster>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { showOptions: true, showLabel: true, showHelperText: true },
};
