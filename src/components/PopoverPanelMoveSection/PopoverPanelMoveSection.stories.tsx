import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelMoveSection } from "./PopoverPanelMoveSection";
const meta = {
  title: "Overlay/Popover panel / Move section",
  component: PopoverPanelMoveSection,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelMoveSection>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
