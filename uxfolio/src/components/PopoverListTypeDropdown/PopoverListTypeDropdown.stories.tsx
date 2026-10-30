import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverListTypeDropdown } from "./PopoverListTypeDropdown";
const meta = {
  title: "Overlay/Popover list / Type dropdown",
  component: PopoverListTypeDropdown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverListTypeDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Gallery layout" } };
