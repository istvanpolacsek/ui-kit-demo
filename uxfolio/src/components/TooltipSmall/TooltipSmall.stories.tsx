import type { Meta, StoryObj } from "@storybook/react-vite";
import { TooltipSmall } from "./TooltipSmall";
const meta = {
  title: "Overlay/Tooltip / Small",
  component: TooltipSmall,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TooltipSmall>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
