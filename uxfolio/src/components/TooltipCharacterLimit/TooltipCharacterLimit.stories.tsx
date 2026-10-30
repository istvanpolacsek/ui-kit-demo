import type { Meta, StoryObj } from "@storybook/react-vite";
import { TooltipCharacterLimit } from "./TooltipCharacterLimit";
const meta = {
  title: "Overlay/Tooltip / Character limit",
  component: TooltipCharacterLimit,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof TooltipCharacterLimit>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { mode: "Light" } };
