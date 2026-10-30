import type { Meta, StoryObj } from "@storybook/react-vite";
import { PopoverPanelReviews } from "./PopoverPanelReviews";
const meta = {
  title: "Overlay/Popover panel / Reviews",
  component: PopoverPanelReviews,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof PopoverPanelReviews>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { property1: "Reviews Trial" } };
