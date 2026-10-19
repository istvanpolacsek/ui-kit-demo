import type { Meta, StoryObj } from "@storybook/react-vite";
import { Slot } from "./Slot";
const meta = {
  title: "Utilities/.Slot",
  component: Slot,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof Slot>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
