import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelEmptyPage } from "./PopoverPanelEmptyPage";
const meta = {
  title: "Overlay/Popover panel / Empty page",
  component: PopoverPanelEmptyPage,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelEmptyPage>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { type: "Default" } };
