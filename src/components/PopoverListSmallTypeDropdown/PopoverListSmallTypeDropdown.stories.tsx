import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverListSmallTypeDropdown } from "./PopoverListSmallTypeDropdown";
const meta = {
  title: "Overlay/Popover list / Small type dropdown",
  component: PopoverListSmallTypeDropdown,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverListSmallTypeDropdown>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Background" } };
