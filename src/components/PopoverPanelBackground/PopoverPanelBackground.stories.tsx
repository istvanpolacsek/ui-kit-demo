import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelBackground } from "./PopoverPanelBackground";
const meta = {
  title: "Overlay/Popover panel / Background",
  component: PopoverPanelBackground,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelBackground>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "None" } };
