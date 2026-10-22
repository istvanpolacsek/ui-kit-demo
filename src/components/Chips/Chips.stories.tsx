import type { Meta, StoryObj } from "@storybook/react-vite";
import { Chips } from "./Chips";
const meta = {
  title: "  ↳ Chips 🆕/Chips",
  component: Chips,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Chips>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {
  args: {
    leftIcon: true,
    value: "Chips",
    rightIcon: true,
    state: "Default",
    size: "Large",
  },
};
