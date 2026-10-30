import type { Meta, StoryObj } from "@storybook/react-vite";
import { TooltipContainer } from "./TooltipContainer";
const meta = {
  title: "Overlay/_Tooltip container",
  component: TooltipContainer,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TooltipContainer>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { side: "Left", mode: "Light" } };
