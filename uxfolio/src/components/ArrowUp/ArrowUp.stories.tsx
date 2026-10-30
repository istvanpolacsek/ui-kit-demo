import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowUp } from "./ArrowUp";
const meta = {
  title: "Visual asset/Arrow up",
  component: ArrowUp,
  tags: ["autodocs"],
  parameters: { layout: "centered" },
} satisfies Meta<typeof ArrowUp>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Default: Story = {};
