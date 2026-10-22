import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronControl } from "./ChevronControl";
const meta = {
  title: "  ↳ Controls 🆕/Chevron Control",
  component: ChevronControl,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChevronControl>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = { args: { direction: "Left", state: "Default" } };
