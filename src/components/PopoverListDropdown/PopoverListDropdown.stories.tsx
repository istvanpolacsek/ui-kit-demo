import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverListDropdown } from "./PopoverListDropdown";
const meta = {
  title: "Overlay/Popover list / Dropdown",
  component: PopoverListDropdown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverListDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: { hasAction: true, type: "Hero text", mode: "Light" },
};
