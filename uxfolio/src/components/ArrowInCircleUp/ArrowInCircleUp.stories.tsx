import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowInCircleUp } from "./ArrowInCircleUp";
const meta = {
  title: "Visual asset/Arrow in circle up",
  component: ArrowInCircleUp,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowInCircleUp>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
