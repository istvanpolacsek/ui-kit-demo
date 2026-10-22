import type { Meta, StoryObj } from "@storybook/react-vite";
import { DesktopDropdown } from "./DesktopDropdown";
const meta = {
  title: "  ↳ Dropdown 🆕/Desktop / Dropdown",
  component: DesktopDropdown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof DesktopDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { state: "Default" } };
