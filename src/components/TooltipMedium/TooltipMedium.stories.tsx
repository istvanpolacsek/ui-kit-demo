import type { Meta, StoryObj } from "@storybook/react-vite";
import { TooltipMedium } from "./TooltipMedium";
const meta = {
  title: "Overlay/Tooltip / Medium",
  component: TooltipMedium,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TooltipMedium>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
