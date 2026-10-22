import type { Meta, StoryObj } from "@storybook/react-vite";
import { ChevronUp } from "./ChevronUp";
const meta = {
  title: "Visual asset/Chevron up",
  component: ChevronUp,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ChevronUp>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
